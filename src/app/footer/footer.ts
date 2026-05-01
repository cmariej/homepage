import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();
  text = `© ${this.year} Clara Jung, Deutschland — Gemacht mit ‪‪❤︎‬ `;

  scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
