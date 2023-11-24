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

  landingVideoUrl: string = "";
  clientsLogoUrl: string[] = [];
  contactImageUrl: string = "";
  showReelImageUrl: string = "";


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

}
