import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../users/user.providers';
import { UsersService } from '../users/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  controllers:[UsersController],
  providers: [
    ...userProviders,
    UsersService,
  ],
})
export class UserModule {}