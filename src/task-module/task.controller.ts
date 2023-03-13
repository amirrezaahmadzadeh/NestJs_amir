import { Body, Controller, Delete, Get , Param, Post, Res, UsePipes, ValidationPipe , Query, ParseBoolPipe} from '@nestjs/common';
import { Response } from 'express';
import { TaskDto, TaskParamsDto, TaskQueryDto } from './dto/task.dto';
import { Task } from './interface/task';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService : TaskService) {}

  @Get()
    async getAllTask(@Res() res : Response) {
         const data = await this.taskService.getAllTask();
          return res.status(200).send(data) ;
     }

   @Get("/:id")
   @UsePipes( new ValidationPipe()) 
    async getTaskById(@Param() ReqParam : TaskParamsDto , @Res() res : Response) {
          const data = await this.taskService.getTask(ReqParam.id);
          return res.status(200).send(data);
     }

   @Get("/:filter/data")
   @UsePipes( new ValidationPipe({whitelist : false , transform : true}))
     async getFilterTask(@Query() reqQuery : TaskQueryDto , @Res() res : Response){
          const data = await this.taskService.getFilterTask(reqQuery.filter)
          return res.status(200).send(data) ;
     }

   @Post()
   @UsePipes( new ValidationPipe())
    async addTask(@Body() task : TaskDto , @Res() res : Response) {
         const data = await this.taskService.addTask(task);
          return res.status(200).send(data);
     }

    @Delete("/:id")
    @UsePipes( new ValidationPipe())
     async deleteTask(@Param() ReqDelParam : TaskParamsDto ) {
          return await this.taskService.DeleteTask(ReqDelParam.id);
          
     } 

}