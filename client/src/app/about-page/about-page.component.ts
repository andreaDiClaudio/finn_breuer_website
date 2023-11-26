import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from "../service/data.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'fb-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  isLoading: boolean = true;

  @ViewChild('contactComponent', {read: ElementRef}) contactComponent : ElementRef | undefined;
  aboutProfileImageUrl: string = "";

  imageUrlArray: string[] = [];
  currentIndex: number = 0;

  constructor(dataService: DataService) {
    forkJoin({
      profileImage: dataService.getAboutProfileImage()
    }).subscribe(() => {
      this.aboutProfileImageUrl = dataService.aboutProfileImageUrl
      this.imageUrlArray = [
        this.aboutProfileImageUrl,
        this.aboutProfileImageUrl,
        this.aboutProfileImageUrl,
        this.aboutProfileImageUrl,
        this.aboutProfileImageUrl,
        this.aboutProfileImageUrl,
      ]
      this.isLoading = false
    }
    )
  }

  next() {
    if (this.currentIndex < this.imageUrlArray.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Go back to the first item
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.imageUrlArray.length - 1; // Go to the last item
    }
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

  scrollToContactComponent() {
    this.contactComponent?.nativeElement.scrollIntoView({behavior: 'smooth'})
  }
}
