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

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.comments = this.commentsService.getComments();
  }

  upvoteComment(id: number) {
    this.commentsService.upvoteComment(id);
  }

  downvoteComment(id: number) {
    this.commentsService.downvoteComment(id);
  }
}
