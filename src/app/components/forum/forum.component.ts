import { Component } from '@angular/core';
import { CommentBoxComponent } from '../comment-box/comment-box.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommentBoxComponent, CommentFormComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {

}
