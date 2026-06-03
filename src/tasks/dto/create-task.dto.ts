export class CreateTaskDto {
  title: string;
  status?: 'todo' | 'in-progress' | 'done';
  dueDate?: string;
}
