import { Component } from '@angular/core';

@Component({
  selector: 'fb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isBurgerOpen: boolean = false;

  // opens and closes the burger menu
  openBurger() {
    this.isBurgerOpen = !this.isBurgerOpen
    console.log(this.isBurgerOpen);
  }

}
