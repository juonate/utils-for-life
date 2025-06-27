import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss']
})
export class MainLayoutComponent {
  mobileQuery: MediaQueryList;

  constructor() {
    this.mobileQuery = window.matchMedia('(max-width: 600px)');
  }
}