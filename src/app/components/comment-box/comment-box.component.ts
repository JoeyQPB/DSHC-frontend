import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  standalone: true,
  imports: [],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.css'
})
export class CommentBoxComponent {
comments = [
  {
    id: 1,
    author: 'João',
    company: 'Tech Corp',
    authorPosition: 'Desenvolvedor',
    commentSubject: 'Sobre o E-Book',
    commentText: 'Este E-book me ajudou bastante a entender conceitos importantes!',
    upVote: 10,
    downVote: 2
  },
  {
    id: 2,
    author: 'Maria',
    company: 'Inova Inc.',
    authorPosition: 'Gerente de Projeto',
    commentSubject: 'Relato Pessoal',
    commentText: 'Achei a linguagem bem acessível e fácil de entender.',
    upVote: 7,
    downVote: 1
  },
  {
    id: 3,
    author: 'Carlos',
    company: 'Soft Solutions',
    authorPosition: 'Analista de Sistemas',
    commentSubject: 'Sobre o E-Book',
    commentText: 'O material é ótimo, mas poderia incluir mais exemplos práticos.',
    upVote: 5,
    downVote: 3
  },
  {
    id: 4,
    author: 'Ana',
    company: 'Creative Labs',
    authorPosition: 'Designer',
    commentSubject: 'Relato Pessoal',
    commentText: 'A didática utilizada no livro é excelente para iniciantes.',
    upVote: 8,
    downVote: 0
  },
  {
    id: 5,
    author: 'Pedro',
    company: 'Innovate Tech',
    authorPosition: 'Arquiteto de Software',
    commentSubject: 'Sobre o E-Book',
    commentText: 'Gostei da abordagem dos tópicos, mas senti falta de mais detalhes sobre as melhores práticas.',
    upVote: 6,
    downVote: 2
  },
  {
    id: 6,
    author: 'Luiza',
    company: 'NextGen IT',
    authorPosition: 'Engenheira de Dados',
    commentSubject: 'Relato Pessoal',
    commentText: 'Um ótimo recurso para aprender, com explicações claras e bem estruturadas.',
    upVote: 9,
    downVote: 1
  },
  {
    id: 7,
    author: 'Ricardo',
    company: 'Alpha Solutions',
    authorPosition: 'Consultor de TI',
    commentSubject: 'Sobre o E-Book',
    commentText: 'O conteúdo é bom, mas algumas partes parecem desatualizadas.',
    upVote: 4,
    downVote: 4
  },
  {
    id: 8,
    author: 'Júlia',
    company: 'Future Works',
    authorPosition: 'Desenvolvedora Front-End',
    commentSubject: 'Relato Pessoal',
    commentText: 'O livro é um bom ponto de partida, ideal para quem está começando.',
    upVote: 7,
    downVote: 0
  },
  {
    id: 9,
    author: 'Gabriel',
    company: 'Tech Innovations',
    authorPosition: 'Administrador de Sistemas',
    commentSubject: 'Sobre o E-Book',
    commentText: 'Apesar de ser uma boa introdução, alguns tópicos poderiam ser mais aprofundados.',
    upVote: 5,
    downVote: 3
  },
  {
    id: 10,
    author: 'Camila',
    company: 'Digital Solutions',
    authorPosition: 'Analista de Negócios',
    commentSubject: 'Relato Pessoal',
    commentText: 'O E-book foi extremamente útil para consolidar meus conhecimentos sobre o assunto.',
    upVote: 8,
    downVote: 1
  }
];

  upvoteComment(commentId: number) {
    const comment = this.comments.find(c => c.id === commentId);
    if (comment) {
      comment.upVote++;
    }
  }

  downvoteComment(commentId: number) {
    const comment = this.comments.find(c => c.id === commentId);
    if (comment) {
      comment.downVote++;
    }
  }
}
