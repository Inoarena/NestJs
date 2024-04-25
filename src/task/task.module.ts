import { Module } from '@nestjs/common';
import { ListController } from './list/list.controller';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  controllers: [ListController,TaskController],
  providers: [TaskService],
})
export class TaskModule {}
