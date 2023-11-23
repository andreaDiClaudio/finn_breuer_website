import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  private landingVideoUrl = "http://localhost:8080/api/landingVideo"

  getLandingVideo() {
    return this.http.get(this.landingVideoUrl, {responseType: 'json'}).pipe(tap((result) => {
      //console.log(result)
    }))
  }

}
