import { Transform, TransformFnParams ,Type} from "class-transformer";
import { IsBoolean, IsDefined, IsNotEmpty, IsString, IsUUID  } from "class-validator";

export class TaskDto {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    name : string;
}

export class TaskParamsDto {
    @IsUUID()
    @IsDefined()
    id : string ;
}

export class TaskQueryDto {
    @IsDefined()
    @IsBoolean()
    @Transform(({value}) => {
        if(value === 'true') return true ;
        if(value === 'false') return false ;
        return value ;
    })
    filter : boolean ;
}