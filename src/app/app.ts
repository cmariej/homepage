import { Component, HostListener, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    RouterOutlet,
    RouterLink,
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('homepage');
  showButton = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.showButton = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
