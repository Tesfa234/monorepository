import { Injectable, NotFoundException } from '@nestjs/common';
import prisma from 'database';

@Injectable()
export class UsersService {
  async getProfile(userId: string) {
    const profile = await prisma.patientProfile.findUnique({
      where: { userId },
      include: { user: { select: { email: true, role: true } } }
    });
    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }

  async updateProfile(userId: string, data: any) {
    return prisma.patientProfile.update({
      where: { userId },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        medicalHistory: data.medicalHistory,
        contactNumber: data.contactNumber,
      }
    });
  }

  async getDoctors(query?: string) {
    return prisma.user.findMany({
      where: { 
        role: 'DOCTOR',
        OR: query ? [
          { email: { contains: query, mode: 'insensitive' } },
          { doctorProfile: { specialty: { contains: query, mode: 'insensitive' } } }
        ] : undefined
      },
      select: { 
        id: true, 
        email: true, 
        doctorProfile: true 
      }
    });
  }

  async updateDoctorProfile(userId: string, data: any) {
    return prisma.doctorProfile.upsert({
      where: { userId },
      update: data,
      create: { ...data, userId }
    });
  }
}
