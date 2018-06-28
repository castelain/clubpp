export interface Request {
  request_id?: string;
  user_id: string;
  club_id: string;
  extra: string;
  time?: string;
  is_read?: boolean;
}
