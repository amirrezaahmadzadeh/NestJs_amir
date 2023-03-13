import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { InjectRepository } from "@nestjs/typeorm";
import { Model} from "mongoose";
import { User } from "src/database/entity/user.entity";
import { FindOneOptions, Repository } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { userDto } from "../dto/user.dto";
import { Customer } from "../interface/customer.interface";


@Injectable()
export class UserService {
     
    constructor(@InjectRepository(User) private userRepo : Repository<User>) { }

    public async listCustomer() : Promise<User []> {
       return await this.userRepo.find({});
    }
    
    public async createdCustomer( user : any ) : Promise<User> {
        try {
            const user = new User();
              user.email = 'amir@gmail.com';
              return await this.userRepo.save(user);

        } catch (error) {
            throw new InternalServerErrorException(error);
        }
   }

    public async getCustomer(id) : Promise<User> {
      const user = await this.userRepo.findOne(id)
       if(!user){
          throw new NotFoundException('User Not Found')
       }
      return user ;
   }

   // public async updateCustomer(id: string , customerDto : createCustomerDto) : Promise<Customer> {
   //     const updateCustomer = await this.customerModel.findByIdAndUpdate(id , customerDto , { new : true });
   //     return updateCustomer ;
   // }

   public async removeCustomer(id ) : Promise<User> {
      const user = await this.userRepo.findOne(id)
       if(!user){
          throw new NotFoundException('User Not Found')
       }
      return await this.userRepo.remove(user) ;
       
   }


}