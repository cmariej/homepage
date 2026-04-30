import { Component, HostListener, signal } from '@angular/core';
import { Home } from "../home/home";
import { About } from "../about/about";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-main-page',
  imports: [
    Home,
    About,
    Contact,
],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  protected readonly title = signal('homepage');
}
