import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})

export class CommentFormComponent {
  comment = {
    name: '',
    company: '',
    position: '',
    comment: '',
    subject: 'Relato pessoal'
  };

  submitComment() {
    if (this.comment.comment) {
      console.log('Comentário enviado:', this.comment);
      this.resetForm();
    } else {
      alert('O campo de comentário é obrigatório.');
    }
  }

  resetForm() {
    this.comment = {
      name: '',
      company: '',
      position: '',
      comment: '',
      subject: 'Relato pessoal'
    };
  }
}
