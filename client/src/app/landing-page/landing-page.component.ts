import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ViewChild,
  AfterViewInit,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import {DataService} from "../service/data.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {BehaviorSubject, combineLatestWith, forkJoin, Subject, Subscription} from "rxjs";

@Component({
  selector: 'fb-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements AfterViewChecked{

  landingVideoUrl: SafeUrl | undefined;
  clientsLogoUrlArray: string[] = [];

  isLoading: boolean = true;

  constructor(private dataService: DataService,private sanitizer: DomSanitizer ) {
    forkJoin({
      landingVideo: this.dataService.getLandingVideo(),
      clientsLogo: this.dataService.getClientLogos()
    }).subscribe(results => {
      this.landingVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataService.landingVideoUrl);
      console.log("video loaded")
      this.clientsLogoUrlArray = dataService.clientsLogoUrl;

      this.isLoading=false;
    });
  }

  @ViewChild('landingVideo', { static: false }) landingVideo: ElementRef | undefined;

  ngAfterViewChecked() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (this.landingVideo && isSafari) {
      this.landingVideo.nativeElement.oncanplay = () => {
        if (this.landingVideo) {
          this.landingVideo.nativeElement.play();
        }
      };
    } else if (this.landingVideo) {
          this.landingVideo.nativeElement.muted = true;
          this.landingVideo.nativeElement.play();
    }
  };


}
