import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../models/comment.model'
import { CommentsService } from '../../services/api/comment.service';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})

export class CommentFormComponent {

  constructor(private commentsService: CommentsService) {}
  
  comment: Comment = {
    id: 0,
    author: '',
    company: '',
    authorPosition: '',
    comment: '',
    subject: 'Relato pessoal',
    upVote: 0,
    downVote: 0,
  };

  submitComment() {
    if (this.comment.comment) {
      this.comment.subject === 'Relato pessoal' ? this.comment.subject = 1 : this.comment.subject = 0;
      this.addComment(this.comment);
      this.resetForm();
    } else {
      alert('O campo de comentário é obrigatório.');
    }
  }
  
  addComment(newComment: Omit<Comment, 'id'>): void {
    this.commentsService.createComment(newComment).subscribe(
      {
        next: () => {console.log('Comentário criado com sucesso!')},
        error: (error) => {console.error('Erro ao criar comentário', error)},
        complete: () => { console.log("Comentário enviado") }
      }
    );
  }

  resetForm() {
    this.comment = {
    id: 0,
    author: '',
    company: '',
    authorPosition: '',
    comment: '',
    subject: 'Relato pessoal',
    upVote: 0,
    downVote: 0,
  };
  }
}
