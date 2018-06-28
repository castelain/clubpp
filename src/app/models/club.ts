import { Image } from './image';

export interface Club {
  club_id?: string;
  club_name: string;
  created_date: string;
  member_number: number;
  club_bio: string;
  tags: string; // comma split
  addresses: string; // comma split
  master_id: string;
  images: Image[];
}
