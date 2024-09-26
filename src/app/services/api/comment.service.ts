import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

 private comments: Comment[] = [];
 private apiUrl = `https://dshc-api.onrender.com/api/v1/comments`;

  constructor(private http: HttpClient) { }

  private commentAddedSource = new BehaviorSubject<Comment | null>(null);
  commentAdded$ = this.commentAddedSource.asObservable();

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl).pipe(
      tap((comments) => {
        console.log('Comentários retornados do servidor:', comments);
      })
    );
  }

  createComment(comment: Omit<Comment, 'id'>): Observable<Comment> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Comment>(this.apiUrl, comment, { headers }).pipe(
      tap((newComment) => {
        this.commentAddedSource.next(newComment);
      })
    );
  }

  upvoteComment(commentId: number) {
    return this.http.post<Comment[]>(this.apiUrl+'/add-upVote/'+commentId, null);
  }

  downvoteComment(commentId: number) {
    return this.http.post<Comment[]>(this.apiUrl+'/add-downVote/'+commentId, null);
  }

  deleteComment(id: number) {
    this.comments.filter((comment) => comment.id != id);
  }
}