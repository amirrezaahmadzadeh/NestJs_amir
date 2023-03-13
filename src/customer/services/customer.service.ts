import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model} from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { createCustomerDto } from "../dto/customer.dto";
import { Customer } from "../interface/customer.interface";


@Injectable()
export class CustomerService {
     
    constructor(@InjectModel('Customer') private readonly customerModel : Model<Customer>) { }

    public async listCustomer() : Promise<Customer []> {
       return await this.customerModel.find({});
    }
    
    public async getCustomer(id : string) : Promise<Customer> {
      const customer = await this.customerModel.findById(id).exec();
       if(!customer){
          throw new NotFoundException('Customer Not Found')
       }
      return customer ;
   }

    public async createdCustomer(creCustomer : createCustomerDto) : Promise<Customer> {
        const newCustomer = await new this.customerModel(creCustomer);
        return newCustomer.save();
   }

   public async updateCustomer(id , customerDto : Partial <createCustomerDto>) : Promise<Customer> {
       const updateCustomer = await this.customerModel.findByIdAndUpdate(id , customerDto , { new : true });
       return updateCustomer ;
   }

   public async removeCustomer(id : string) : Promise<Customer []> {
       try {
             return await this.customerModel.findByIdAndRemove(id);
      } catch (error) {
              throw new InternalServerErrorException(error);
      }  
   }


}