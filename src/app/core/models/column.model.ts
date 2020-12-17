import { Task } from './task.model';

export interface Column {
  id?: string;
  title: string;
  board_id: string;
  tasks?: Task[];
}
