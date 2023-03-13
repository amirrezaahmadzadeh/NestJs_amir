import { IsDefined, IsEmail, IsMongoId, IsNotEmpty } from "class-validator";

export class userDto {
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

export class userParamDto {
    
    @IsMongoId()
    @IsNotEmpty()
    readonly userID : string ;
}