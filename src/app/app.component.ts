import { Component } from '@angular/core';
import { EBookComponent } from "./components/e-book/e-book.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ForumComponent } from "./components/forum/forum.component";
import { CommentsService } from './services/api/comment.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EBookComponent, NavbarComponent, AboutUsComponent, ForumComponent, HttpClientModule ],
  providers: [CommentsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DSHC-FrontEnd';
}
