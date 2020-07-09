import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  celsius: number;
  fahrenheit: number;
  ffeelslike: number;
  cfeelslike: number;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToweather(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      this.celsius=(this.weatherData.main.temp - 273.15);
      this.cfeelslike=(this.weatherData.main.feels_like - 273.15);
      this.fahrenheit=(this.weatherData.main.temp - 273.15) * 9/5 + 32 ;
      this.ffeelslike=(this.weatherData.main.feels_like - 273.15) * 9/5 + 32 ;

      console.log(this.weatherData);
    });
  }

 
  Delhi() {
    this.apixuService.getWeather("delhi").subscribe(data => {
      this.weatherData = data;
      this.celsius=(this.weatherData.main.temp - 273.15);
      this.cfeelslike=(this.weatherData.main.feels_like - 273.15);
      this.fahrenheit=(this.weatherData.main.temp - 273.15) * 9/5 + 32 ;
      this.ffeelslike=(this.weatherData.main.feels_like - 273.15) * 9/5 + 32 ;

      console.log(this.weatherData);
    });
  }

  bangalore() {
    this.apixuService.getWeather("Bengaluru").subscribe(data => {
      this.weatherData = data;
      this.celsius=(this.weatherData.main.temp - 273.15);
      this.cfeelslike=(this.weatherData.main.feels_like - 273.15);
      this.fahrenheit=(this.weatherData.main.temp - 273.15) * 9/5 + 32 ;
      this.ffeelslike=(this.weatherData.main.feels_like - 273.15) * 9/5 + 32 ;

      console.log(this.weatherData);
    });
  }

  london() {
    this.apixuService.getWeather("london").subscribe(data => {
      this.weatherData = data;
      this.celsius=(this.weatherData.main.temp - 273.15);
      this.cfeelslike=(this.weatherData.main.feels_like - 273.15);
      this.fahrenheit=(this.weatherData.main.temp - 273.15) * 9/5 + 32 ;
      this.ffeelslike=(this.weatherData.main.feels_like - 273.15) * 9/5 + 32 ;

      console.log(this.weatherData);
    });
  }

}
