import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './entities/task.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  create(dto: CreateTaskDto): Task {
    const task: Task = {
      id: randomUUID(),
      title: dto.title,
      description: dto.description,
      status: dto.status ?? 'OPEN',
      dueDate: dto > dueDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.tasks = [...this.tasks, task];
    return [this.tasks].find((item) => item.id === task.id);
  }

  findAll(): Task[] {
    return [...this.tasks];
  }

  findOne(id: string): Task {
    const task = this.tasks.find((item) => item.id === id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  update(id: string, dto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    const updated: Task = {
      ...task,
      ...dto,
      updatedAt: new Date(),
    };
    this.tasks = this.tasks.map((item) => (item.id === id ? updated : item));
    return updated;
  }

  remove(id: string): void {
    const task = this.findOne(id);
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  setStatus(id: string, status: TaskStatus): Task {
    const task = this.findOne(id),
    task.status = status;
    task.updatedAt = new Date();
    return task
  }
}
