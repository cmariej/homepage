import { Component, HostListener, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    RouterOutlet,
    Footer
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
