import {Component, Input,} from '@angular/core';
import {DataService} from "../../service/data.service";

@Component({
  selector: 'fb-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contactSectionImageHeight: string = ""
  @Input() contactImageUrl: string = "";

  constructor(dataService: DataService) {
    if (window.innerHeight > 825) {
      this.contactSectionImageHeight = "sm:h-[76.5vh] sm:min-h-[738px] h-[65vh] min-h-[370px]"
    } else {
      this.contactSectionImageHeight = "sm:h-[72.3vh] sm:min-h-[597px] h-[60vh] min-h-[495px]"
    }
  }

}
