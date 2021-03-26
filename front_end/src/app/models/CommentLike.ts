export interface CommentLike {
  id: number;
  comment_id: number;
  comment_like: 0 | 1 | null;
}

export function commentLikeInitValues(): CommentLike {
  return {
    id: 0,
    comment_id: 0,
    comment_like: null,
  };
}
