import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Clients_Logo, Video} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  private landingVideoApiUrl = "http://localhost:8080/api/landingVideo"
  private clientsLogoApiUrl = "http://localhost:8080/api/clientLogos"

  landingVideoUrl: string = "";
  clientsLogoUrl: string[] = [];


  getLandingVideo() {
    return this.http.get(this.landingVideoApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const video = result as Video;
      this.landingVideoUrl = video.secure_url;
    }))
  }

  getClientLogos() {
    return this.http.get(this.clientsLogoApiUrl, {responseType: 'json'}).pipe(tap((result) => {
      const momentaryResult = result as Clients_Logo[];
      momentaryResult.forEach((image) => {
        this.clientsLogoUrl.push(image.secure_url);
      })
    }))
  }
}
