import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EBookComponent } from "./components/e-book/e-book.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommentFormComponent } from "./components/comment-form/comment-form.component";
import { CommentBoxComponent } from "./components/comment-box/comment-box.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EBookComponent, NavbarComponent, CommentFormComponent, CommentBoxComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DSHC-FrontEnd';
}
