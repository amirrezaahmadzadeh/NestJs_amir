import { date, number, string } from "joi";
import * as mongoose from "mongoose";

export const CustomerSchema = new mongoose.Schema({
    first_name : string ,
    last_name : string ,
    email : string ,
    phone : string ,
    address : string ,
    description : string ,
    created_at : { type : Date , default : Date.now }
})

