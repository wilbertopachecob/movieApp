export interface Comment {
  id?: number;
  user_id?: number;
  content: string;
  parent_id?: number;
  movie_id?: number;
  created_at?: string;
  updated_at?: string;
  user_name?: string;
  likes?: number;
  dislikes?: number;
}
