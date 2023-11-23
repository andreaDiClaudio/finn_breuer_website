import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'fb-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contactSectionImageHeight: string = ""
  constructor() {
    if (window.innerHeight > 825) {
      this.contactSectionImageHeight = "h-[69.5vh] min-h-[671px]"
    } else {
      this.contactSectionImageHeight = "h-[64.5vh] min-h-[532px]"
    }
  }

}
