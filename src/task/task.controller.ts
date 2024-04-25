import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TaskDTO } from 'src/DTO/task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
    constructor(private readonly taskservice:TaskService){}
    @Post()
    create(@Body() task: TaskDTO) {
        return this.taskservice.createTask(task)
    }
    @Get('/all')
    allTasks(){
        return this.taskservice.getAll()
    }
    @Get('/:id')
    taskFind(@Param('id') id:string):TaskDTO{
        return this.taskservice.findTask(id)
    }
    @Put()
    updateTask(@Body() task:TaskDTO){
        return this.taskservice.updateTask(task)
    }
}
