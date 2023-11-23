import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from "../service/data.service";
import {Video} from "../model/model";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'fb-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  landingVideoUrl: SafeUrl = "";
  constructor(private dataService: DataService,private sanitizer: DomSanitizer, ) {
    this.dataService.getLandingVideo().subscribe((result) => {
      const video = result as Video
      this.landingVideoUrl  = this.sanitizer.bypassSecurityTrustResourceUrl(video.secure_url)
    })
  }
}
