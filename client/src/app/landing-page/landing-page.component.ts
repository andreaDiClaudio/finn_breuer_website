import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ViewChild,
  AfterViewInit,
  ElementRef,
  AfterViewChecked, Renderer2
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

  @ViewChild('landingVideo', { static: false }) landingVideo: ElementRef | undefined;
  landingVideoUrl: SafeUrl | undefined;
  videoThumbImageUrl: string = "";
  contactImageUrl: string = "";
  showReelImageUrl: string = "";
  clientsLogoUrlArray: string[] = [];

  isLoading: boolean = true;

  safariAnimation: string = "{videoSafariFadeIn:true}";
  chromeAnimation: string= "{videoChromeFadeIn:true}";
  videoAnimation: string = "";
  isSafari: boolean;

  isBouncing: boolean = false;

  constructor(private dataService: DataService,private sanitizer: DomSanitizer ) {
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    this.makeArrowBounce()


    forkJoin({
      videoThumb: this.dataService.getVideoThumb(),
      landingVideoApi: this.dataService.getLandingVideo(),
      showReelImage: this.dataService.getShowreelImage(),
      clientsLogo: this.dataService.getClientLogos(),
      contactImage: this.dataService.getContactImage(),
    }).subscribe(results => {
      this.landingVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataService.landingVideoUrl);
      this.clientsLogoUrlArray = dataService.clientsLogoUrl;
      this.videoThumbImageUrl = dataService.videoThumbImageUrl;
      this.contactImageUrl = dataService.contactImageUrl;
      this.showReelImageUrl = dataService.showReelImageUrl;

      this.isLoading=false;
    });
  }

  ngAfterViewChecked() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (this.landingVideo && isSafari) {
      console.log(isSafari)
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

  makeArrowBounce() {
    setInterval(() => {
      this.isBouncing = true;
    console.log("arrived")

      setTimeout(() => {
        this.isBouncing = false;
      }, 2000);  // Animation runs for 2 seconds
    }, 5000);  // Repeat every 5 seconds
  }

}
