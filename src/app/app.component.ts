import { Component, OnInit } from '@angular/core';
import {WeatherDataService} from './services/weather-data.service'
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private weatherDataService: WeatherDataService){

}

cityName: string = 'Wellington';
weatherData?: WeatherData;

ngOnInit(): void {
this.getWeatherData(this.cityName);
this.cityName = '';
}

onSubmit() {
this.getWeatherData(this.cityName);
this.cityName = '';
}

private getWeatherData(cityName: string) {
this.weatherDataService.getWeatherData(cityName)
.subscribe({
    next: (response) => {
    this.weatherData = response;
    console.log(response);
    }
});
}
}
