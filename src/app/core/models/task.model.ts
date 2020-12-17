export interface Task {
  id?: string;
  title: string;
  description?: string;
  board_id: string;
  column_id: string;
  owner_id: string;
  assignee_id?: string;
  expiration_date?: number;
}
