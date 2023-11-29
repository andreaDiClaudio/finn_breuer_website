import { Component } from '@angular/core';
import {DataService} from "../service/data.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'fb-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css']
})
export class WorksPageComponent {

  pageCoverImageUrl: string = "";
  isLoading:boolean = true;

  constructor(dataService: DataService) {
    forkJoin({
      videoThumb: dataService.getVideoThumb(),
    }).subscribe(results => {
      this.pageCoverImageUrl = dataService.videoThumbImageUrl;

      this.isLoading=false;
    });
  }

}
