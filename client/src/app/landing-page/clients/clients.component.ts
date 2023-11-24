import {Component, Input, OnInit,} from '@angular/core';

@Component({
  selector: 'fb-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  @Input() clientsLogoUrlArray: string[] = [];


}
