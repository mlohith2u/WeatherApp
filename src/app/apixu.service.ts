import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        location+"&appid=0d3f70dae208d359555fab27acdd2edc"
    );
  }
}
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0d3f70dae208d359555fab27acdd2edc