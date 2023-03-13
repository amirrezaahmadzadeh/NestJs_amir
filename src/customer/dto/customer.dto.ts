import { IsDefined, IsEmail, IsMongoId, IsNotEmpty } from "class-validator";

export class createCustomerDto {
    readonly first_name : string ;
    readonly last_name : string ;

    @IsEmail()
    @IsDefined()
    readonly email : string ;

    readonly phone : string ;
    readonly address : string ;
    readonly description : string ;
    readonly created_at : Date ;
}

export class customerParamDto {
    
    @IsMongoId()
    @IsNotEmpty()
    readonly customerID : string ;
}