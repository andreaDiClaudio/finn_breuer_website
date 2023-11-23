import { Component } from '@angular/core';
import {DataService} from "../../service/data.service";
import {Clients_Logo} from "../../model/model";

@Component({
  selector: 'fb-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  pathToImage: string = "assets/images/landingPage/clientsLogo/"

  clientsLogoUrlArray: string[] = [];

  clientsLogo: string[] = [
    this.pathToImage + "angus_logo.png",
    this.pathToImage + "DFDS_logo.png",
    this.pathToImage + "golden_goose_logo.png",
    this.pathToImage + "helpii_logo.png",
    this.pathToImage + "ironman-vector-logo.png",
    this.pathToImage + "mg_logo.png",
    this.pathToImage + "nhcollection_logo.png",
    this.pathToImage + "Novo_Nordisk_-_Logo.png",
    this.pathToImage + "nuna_logo.png",
    this.pathToImage + "our_shift_logo.png",
    this.pathToImage + "tiptapp_logo.png",
    this.pathToImage + "UNICEF_logo.png",
    this.pathToImage + "World_Chess_Championship_Logo.png",
    this.pathToImage + "wooshii_logo.png",
    this.pathToImage + "gods_logo.png"
  ]

  constructor(dataService: DataService) {
    dataService.getClientLogos().subscribe((result) => {
      this.clientsLogoUrlArray  = dataService.clientsLogoUrl;
      console.log(this.clientsLogoUrlArray)
    })
  }

}
