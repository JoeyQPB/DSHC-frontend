export interface Comment {
  id: number;
  author: string | null;
  company: string | null;
  authorPosition: string | null;
  commentSubject: string | Number;
  commentText: string;
  upVote: number;
  downVote: number;
}