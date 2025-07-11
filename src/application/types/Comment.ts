export interface Comment {
    postId?: number,
    name: string,
    email: string,
    body: string
}

export interface CommentResponse extends Comment {
  id: number;
}