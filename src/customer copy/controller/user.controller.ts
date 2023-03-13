import { Controller, Get , Res , Param , HttpStatus, Delete, Put, Req, Query, Body, Post} from '@nestjs/common';
import { Request, Response } from 'express';
import { userDto, userParamDto } from '../dto/user.dto';
import { Customer } from '../interface/customer.interface';
import { UserService } from '../services/user.service';

@Controller('customers')
export class UserController {
  constructor(private readonly userService : UserService ) {}

// http Get
  @Get()
    async getAllCustomer(@Res() res : Response ) {
         const data = await this.userService.listCustomer() ;
           res.status(HttpStatus.OK).json(data);
     }

  @Post()
  async createCustomer(@Res() res : Response , @Body() userParam : userDto) {
          try {
               const data = await this.userService.createdCustomer(userParam) ;
               res.status(HttpStatus.OK).json(data);
         } catch (err) {
               res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);   
         }
   }

  @Get('/:userId')
    async getCustomerById( @Param() param : userParamDto ) {
      return await this.userService.getCustomer(param.userID) ;
  }

  @Delete('/')
  async deleteCustomerById( @Query('userid') id : string ) {
     return await this.userService.removeCustomer(id) ;
  }

  // @Put('/')
  // async updateCustomerById(@Res() res : Response , @Body() customerParam : createCustomerDto, @Query('customerid') id : string , ) {
  //   const data = await this.customerService.updateCustomer(id , customerParam) ;
  //     res.status(HttpStatus.OK).json(data);
  // }

}