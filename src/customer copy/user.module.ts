import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from 'src/customer/services/customer.service';
import { Customer } from 'src/database/entity/customer.entity';
import { User } from 'src/database/entity/user.entity';
import { UserController } from './controller/user.controller';
import { CustomerSchema } from './schemas/customer.schema';
import { UserService } from './services/user.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([User , Customer])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}