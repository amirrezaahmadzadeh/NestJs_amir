import { Controller, Get , Res , Param , HttpStatus, Delete, Put, Req, Query, Body, Post} from '@nestjs/common';
import { Request, Response } from 'express';
import { createCustomerDto, customerParamDto } from '../dto/customer.dto';
import { Customer } from '../interface/customer.interface';
import { CustomerService } from '../services/customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService : CustomerService ) {}

// http Get
  @Get()
    async getAllCustomer(@Res() res : Response ) {
         const data = await this.customerService.listCustomer() ;
           res.status(HttpStatus.OK).json(data);
     }

  @Post()
  async createCustomer(@Res() res : Response , @Body() customerParam : createCustomerDto) {
          try {
               const data = await this.customerService.createdCustomer(customerParam) ;
               res.status(HttpStatus.OK).json(data);
         } catch (err) {
               res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);   
         }
   }

  @Get('/:customerId')
    async getCustomerById( @Param() param : customerParamDto ) {
      return await this.customerService.getCustomer(param.customerID) ;
  }

  @Delete('/')
  async deleteCustomerById( @Query('customerid') id : string ) {
     return await this.customerService.removeCustomer(id) ;
  }

  @Put('/')
  async updateCustomerById(@Res() res : Response , @Body() customerParam : Partial <createCustomerDto> , @Query('customerid') id : string , ) {
    const data = await this.customerService.updateCustomer(id , customerParam) ;
      res.status(HttpStatus.OK).json(data);
  }

}