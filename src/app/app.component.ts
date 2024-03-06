import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  calculateMinHeight(): string {
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector('app-header')?.clientHeight;
    const footerHeight = document.querySelector('app-footer')?.clientHeight;
    const minHeight = windowHeight - (headerHeight ?? 0) - (footerHeight ?? 0);
    return minHeight + 'px';
  }
  title = 'codeCampus';
}
