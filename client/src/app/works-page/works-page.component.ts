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
  videoPreviewUrl: string[] =  [];

  isLoading:boolean = true;

  constructor(dataService: DataService) {
    forkJoin({
      videoThumb: dataService.getVideoThumb(),
      videography: dataService.getWorksVideography()
    }).subscribe(results => {
      this.pageCoverImageUrl = dataService.videoThumbImageUrl;
      this.videoPreviewUrl = dataService.worksVideoUrl;
      console.log(this.videoPreviewUrl);
      console.log("What?")
      this.isLoading=false;
    });
  }

}
