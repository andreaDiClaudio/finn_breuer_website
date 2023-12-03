import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pipe, tap} from "rxjs";
import {Image, Video} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  private landingVideoApiUrl = "http://localhost:8080/api/landingVideo"
  private clientsLogoApiUrl = "http://localhost:8080/api/clientLogos"
  private contactImageApiUrl = "http://localhost:8080/api/contactsImage"
  private showReelImageApiUrl = "http://localhost:8080/api/showReelLanding"
  private worksLandingApiUrl = "http://localhost:8080/api/worksLanding"
  private videoThumbImageApiUrl = "http://localhost:8080/api/videoThumb"
  private aboutProfileImageApiUrl = "http://localhost:8080/api/aboutProfileImage"
  private aboutInActionImagesApiUrl = "http://localhost:8080/api/aboutInActionsImages"
  private worksVideographyImageApiUrl = "http://localhost:8080/api/works/videography"
  private worksPhotographyImageApiUrl = "http://localhost:8080/api/works/videography"

  landingVideoUrl: string = "";
  clientsLogoUrl: string[] = [];
  contactImageUrl: string = "";
  showReelImageUrl: string = "";
  worksLandingImageUrl: string = "";
  videoThumbImageUrl: string = "";
  aboutProfileImageUrl: string = "";
  aboutInActionImagesArrayUrl: string[] = [];
  worksVideoUrl: string[] = [];


  getLandingVideo() {
    return this.http.get(this.landingVideoApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const video = result as Video;
      this.landingVideoUrl = video.secure_url;
    }))
  }

  getClientLogos() {
    return this.http.get(this.clientsLogoApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const momentaryResult = result as Image[];
      momentaryResult.forEach((image) => {
        this.clientsLogoUrl.push(image.secure_url);
      })
    }))
  }

  getContactImage() {
    return this.http.get(this.contactImageApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const image = result as Image;
      this.contactImageUrl = image.secure_url;
    }))
  }

  getShowreelImage() {
    return this.http.get(this.showReelImageApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const image = result as Image;
      this.showReelImageUrl = image.secure_url;
    }))
  }

  getWorksLandingImage() {
    return this.http.get(this.worksLandingApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const image = result as Image;
      this.worksLandingImageUrl = image.secure_url;
    }))
  }

  getVideoThumb() {
    return this.http.get(this.videoThumbImageApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const image = result as Image;
      this.videoThumbImageUrl = image.secure_url;
    }))
  }

  getAboutProfileImage() {
    return this.http.get(this.aboutProfileImageApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const image = result as Image;
      this.aboutProfileImageUrl = image.secure_url;
    }))
  }

  getAboutInActionImages() {
    return this.http.get(this.aboutInActionImagesApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const images = result as Image[];
      images.forEach((image) => {
      this.aboutInActionImagesArrayUrl.push(image.secure_url);
      })
      console.log(this.aboutInActionImagesArrayUrl)
    }))
  }

  getWorksVideography() {
    return this.http.get(this.worksVideographyImageApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const momentaryResult = result as Video[];
      momentaryResult.forEach((video) => {
        this.worksVideoUrl.push(video.secure_url);
      })
    }))
  }

}
