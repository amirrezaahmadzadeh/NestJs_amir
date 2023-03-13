import { Injectable, NotFoundException } from "@nestjs/common";
import { takeCoverage } from "v8";
import { Task } from "./interface/task";

@Injectable()
export class TaskStoreService {
     public tasks : Task [] = [];

    public async addTask(task : Task) : Promise<Task> {
        this.tasks.push(task)
        return Promise.resolve(task) ;
    }

    public async getTask(id : string) : Promise<Task> {
        const taskGet = this.tasks.filter( (itemId  : Task) => itemId.uuid === id );

         if( taskGet && taskGet.length > 0) {
            return Promise.resolve(taskGet[0]); 
         }
         throw new NotFoundException("task Not Found :(")
    }

    public async getAllTask() : Promise<Task[]>{
        return Promise.resolve(this.tasks) ;
    }

    public async DeleteTask( id : string) : Promise<Task[]> {
        const taskGet = this.tasks.filter( (itemId  : Task) => itemId.uuid === id );
        
        if(taskGet.length === 0) {
            throw new NotFoundException("task Not Found :(")
         }
         
        const taskDelete = this.tasks.filter( (iteamDELETEid : Task) => iteamDELETEid.uuid !== id) ;
        this.tasks = taskDelete ;
        return Promise.resolve(this.tasks);
    }

    public async getFilterTask(filter) : Promise<Task[]>{
        if(!filter){
            return Promise.resolve(this.tasks) ;
        }
        return Promise.resolve(this.tasks.filter( (i : Task) => i.duration > 0));
    }
}

