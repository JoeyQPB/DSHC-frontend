import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment.model'; 

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
//   private comments: Comment[] = [
//   {
//     id: 1,
//     author: 'João',
//     company: 'Tech Corp',
//     authorPosition: 'Desenvolvedor',
//     subject: 'Sobre o E-Book',
//     comment: 'Este E-book me ajudou bastante a entender conceitos importantes!',
//     upVote: 10,
//     downVote: 2
//   },
//   {
//     id: 2,
//     author: 'Maria',
//     company: 'Inova Inc.',
//     authorPosition: 'Gerente de Projeto',
//     subject: 'Relato Pessoal',
//     comment: 'Achei a linguagem bem acessível e fácil de entender.',
//     upVote: 7,
//     downVote: 1
//   },
//   {
//     id: 3,
//     author: 'Carlos',
//     company: 'Soft Solutions',
//     authorPosition: 'Analista de Sistemas',
//     subject: 'Sobre o E-Book',
//     comment: 'O material é ótimo, mas poderia incluir mais exemplos práticos.',
//     upVote: 5,
//     downVote: 3
//   },
//   {
//     id: 4,
//     author: 'Ana',
//     company: 'Creative Labs',
//     authorPosition: 'Designer',
//     subject: 'Relato Pessoal',
//     comment: 'A didática utilizada no livro é excelente para iniciantes.',
//     upVote: 8,
//     downVote: 0
//   },
//   {
//     id: 5,
//     author: 'Pedro',
//     company: 'Innovate Tech',
//     authorPosition: 'Arquiteto de Software',
//     subject: 'Sobre o E-Book',
//     comment: 'Gostei da abordagem dos tópicos, mas senti falta de mais detalhes sobre as melhores práticas.',
//     upVote: 6,
//     downVote: 2
//   },
//   {
//     id: 6,
//     author: 'Luiza',
//     company: 'NextGen IT',
//     authorPosition: 'Engenheira de Dados',
//     subject: 'Relato Pessoal',
//     comment: 'Um ótimo recurso para aprender, com explicações claras e bem estruturadas.',
//     upVote: 9,
//     downVote: 1
//   },
//   {
//     id: 7,
//     author: 'Ricardo',
//     company: 'Alpha Solutions',
//     authorPosition: 'Consultor de TI',
//     subject: 'Sobre o E-Book',
//     comment: 'O conteúdo é bom, mas algumas partes parecem desatualizadas.',
//     upVote: 4,
//     downVote: 4
//   },
//   {
//     id: 8,
//     author: 'Júlia',
//     company: 'Future Works',
//     authorPosition: 'Desenvolvedora Front-End',
//     subject: 'Relato Pessoal',
//     comment: 'O livro é um bom ponto de partida, ideal para quem está começando.',
//     upVote: 7,
//     downVote: 0
//   },
//   {
//     id: 9,
//     author: 'Gabriel',
//     company: 'Tech Innovations',
//     authorPosition: 'Administrador de Sistemas',
//     subject: 'Sobre o E-Book',
//     comment: 'Apesar de ser uma boa introdução, alguns tópicos poderiam ser mais aprofundados.',
//     upVote: 5,
//     downVote: 3
//   },
//   {
//     id: 10,
//     author: 'Camila',
//     company: 'Digital Solutions',
//     authorPosition: 'Analista de Negócios',
//     subject: 'Relato Pessoal',
//     comment: 'O E-book foi extremamente útil para consolidar meus conhecimentos sobre o assunto.',
//     upVote: 8,
//     downVote: 1
//   }
// ];

 private comments: Comment[] = [];

  constructor() { }

  getComments(): Comment[] {
    return this.comments;
  }

  addComment(comment: Comment) {
    let newId = (this.comments.length == 0) ? 1 : this.comments.length + 1;
    comment.id = newId;
    this.comments.push(comment);
  }

  deleteComment(id: number) {
    this.comments.filter((comment) => comment.id != id);
  }

  upvoteComment(commentId: number) {
    let comment = this.comments.find(c => c.id === commentId);
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