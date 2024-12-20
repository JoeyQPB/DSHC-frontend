import { Component } from '@angular/core';

@Component({
  selector: 'app-e-book',
  standalone: true,
  imports: [],
  templateUrl: './e-book.component.html',
  styleUrl: './e-book.component.css'
})
export class EBookComponent {
  ebookCoverImage = 'cover-image.jpeg'

  downloadEbook() {
    const ebookUrl = 'Ebook.pdf';
    const link = document.createElement('a');
    link.href = ebookUrl;
    link.target = '_blank';
    link.download = 'ESTRATÉGIA DE LIDERANÇA NO AMBIENTE CORPORATIVO MODERNO.pdf';
    link.click();
  }
}