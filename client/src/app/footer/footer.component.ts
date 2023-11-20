import { Component } from '@angular/core';

@Component({
  selector: 'fb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentYear: number = 0;
  constructor() {
    this.currentYear = new Date(). getFullYear();
  }
}
