import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment.model'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.get<Comment[]>(this.apiUrl, { headers }).pipe(
      tap((comments) => console.log('Comentários retornados do servidor:', comments)),
      catchError(this.handleError)
    );
  }

  createComment(comment: Omit<Comment, 'id'>): Observable<Comment> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Comment>(this.apiUrl, comment, { headers }).pipe(
      tap((newComment) => this.commentAddedSource.next(newComment)),
      catchError(this.handleError)
    );
  }

  upvoteComment(commentId: number) {
    return this.http.post<Comment[]>(`${this.apiUrl}/add-upVote/${commentId}`, null).pipe(
      catchError(this.handleError)
    );
  }

  downvoteComment(commentId: number) {
    return this.http.post<Comment[]>(`${this.apiUrl}/add-downVote/${commentId}`, null).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Erro ao fazer requisição à API', error);
    return throwError(() => new Error('Erro ao se comunicar com a API. Tente novamente mais tarde.'));
  }

  deleteComment(id: number) {
    this.comments.filter((comment) => comment.id != id);
  }
}