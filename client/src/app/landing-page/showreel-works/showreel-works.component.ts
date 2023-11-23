import { Component } from '@angular/core';

@Component({
  selector: 'fb-showreel-works',
  templateUrl: './showreel-works.component.html',
  styleUrls: ['./showreel-works.component.css']
})
export class ShowreelWorksComponent {

  showReelHeight: string = "";
  worksHeight: string = "";

  constructor() {
    if (window.innerHeight > 825) {
      this.showReelHeight = "h-[58vh] min-h-[540px]"
      this.worksHeight= "h-[40.5vh] min-h-[375px]"
    } else {
      this.showReelHeight = "h-[58vh] min-h-[477px] "
      this.worksHeight= "h-[40vh] min-h-[330px]"
    }
  }

}
