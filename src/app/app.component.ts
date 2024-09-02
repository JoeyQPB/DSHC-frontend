import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EBookComponent } from "./components/e-book/e-book.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EBookComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DSHC-FrontEnd';
}
