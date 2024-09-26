export interface Comment {
  id: number;
  author: string | null;
  company: string | null;
  authorPosition: string | null;
  subject: string | Number;
  comment: string;
  upVote: number;
  downVote: number;
}