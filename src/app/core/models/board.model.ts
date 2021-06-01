import { Column } from './column.model';

export interface Board {
  id?: string;
  title: string;
  owner_id: string;
  date_created: number;
  columns: Column[];
}
