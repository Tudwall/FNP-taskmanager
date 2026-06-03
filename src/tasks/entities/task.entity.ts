export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export class Task {
  id!: string;
  title!: string;
  description!: string;
  status!: TaskStatus;
  dueDate?: string;
  createdAt!: Date;
  updatedAt!: Date;
}
