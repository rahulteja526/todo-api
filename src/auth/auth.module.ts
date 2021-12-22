import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalAuthGuard]
})
export class AuthModule {}
