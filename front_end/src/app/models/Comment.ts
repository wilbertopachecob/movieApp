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

export function commentInitValues(): Comment {
  return {
    id: 0,
    user_id: 0,
    content: '',
    parent_id: 0,
    movie_id: 0,
    created_at: '',
    updated_at: '',
    user_name: '',
    likes: 0,
    dislikes: 0,
  };
}
