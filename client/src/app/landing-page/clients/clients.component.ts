import { Component } from '@angular/core';
import {DataService} from "../../service/data.service";
import {Image} from "../../model/model";

@Component({
  selector: 'fb-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  clientsLogoUrlArray: string[] = [];

  constructor(dataService: DataService) {
    dataService.getClientLogos().subscribe((result) => {
      this.clientsLogoUrlArray  = dataService.clientsLogoUrl;
    })
  }

}
