export type TaskStatus = 'todo' | 'in-progress' | 'done';

export class Task {
  id!: string;
  title!: string;
  status!: TaskStatus;
  dueDate?: string;
  createdAt!: Date;
  updatedAt!: Date;
}
