import { Component } from '@angular/core';
import { CommentsService } from '../../services/api/comment.service';
import { Comment } from '../../models/comment.model'

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.css'
})
export class CommentBoxComponent {

  comments: Comment[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();

    // Inscreve-se no BehaviorSubject para saber quando um novo comentário foi adicionado
    this.commentsService.commentAdded$.subscribe(newComment => {
      if (newComment) {
        this.comments.push(newComment);
      }
    });
  }

  getComments(): void {
    this.commentsService.getAllComments().subscribe({
      next: (data) => {
        this.comments = data;
        console.log('Comentários carregados com sucesso:', this.comments);
      },
      error: (error) => {
        console.error('Erro ao buscar comentários', error);
      },
      complete: () => {
        console.log('Busca de comentários concluída.');
      }
    });
  }

  upvoteComment(id: number) {
    this.commentsService.upvoteComment(id);
  }

  downvoteComment(id: number) {
    this.commentsService.downvoteComment(id);
  }
}
