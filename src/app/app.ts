import { Component, HostListener, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Home,
    About,
    Contact
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('homepage');
  showButton = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.showButton = window.scrollY > 500;
    console.log(window.scrollY);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
