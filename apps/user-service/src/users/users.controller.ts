import { Controller, Get, Put, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return this.usersService.getProfile(req.user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  updateProfile(@Request() req: any, @Body() body: any) {
    return this.usersService.updateProfile(req.user.sub, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('doctors')
  getDoctors(@Request() req: any) {
    const { q } = req.query || {};
    return this.usersService.getDoctors(q);
  }

  @UseGuards(JwtAuthGuard)
  @Put('doctor-profile')
  updateDoctorProfile(@Request() req: any, @Body() body: any) {
    if (req.user.role !== 'DOCTOR' && req.user.role !== 'ADMIN') {
      throw new Error('Unauthorized');
    }
    return this.usersService.updateDoctorProfile(req.user.sub, body);
  }
}
