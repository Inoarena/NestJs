import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TaskDTO, TaskEnum } from 'src/DTO/task.dto';
import { v4 } from 'uuid';
@Injectable()
export class TaskService {
    private tasks: TaskDTO[] = []
    createTask(task: TaskDTO) {
        task.id=v4()
        task.status=TaskEnum.TO_DO
        this.tasks.push(task)
        return this.tasks
    }
    findTask(id: string): TaskDTO {

        const task = this.tasks.filter(t => t.id === id)
        if (task.length) {
            return task[0]
        }
        throw new NotFoundException(`Id ${id} not found`);

    }
    getAll() {
        return {"message":"All tasks", 'tasks': this.tasks }
    }
    updateTask(Task:TaskDTO){
        const task=this.tasks.findIndex(t=>t.id===Task.id)
        if(task>=0){
            this.tasks[task]=Task
        }
        throw new HttpException(`Id ${Task.id} not found`,HttpStatus.BAD_REQUEST)
    }
}
