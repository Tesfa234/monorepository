import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import prisma from 'database';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(data: any) {
    const existing = await prisma.user.findUnique({ where: { email: data.email } });
    if (existing) {
      throw new ConflictException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash: hashedPassword,
        role: data.role || 'PATIENT',
      },
    });

    // Create a blank profile if they are a patient
    if (user.role === 'PATIENT') {
      await prisma.patientProfile.create({
        data: {
          userId: user.id,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          dateOfBirth: new Date(data.dateOfBirth || new Date()),
        }
      });
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      userId: user.id,
      role: user.role,
    };
  }

  async login(data: any) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(data.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      userId: user.id,
      role: user.role,
    };
  }
}
