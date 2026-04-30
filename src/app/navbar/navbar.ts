import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  activeSection = 'home';

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['home', 'about', 'contact'];

    for (let id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        this.activeSection = id;
      }
    }
  }
}
