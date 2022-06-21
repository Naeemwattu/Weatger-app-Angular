import { Component, OnInit } from '@angular/core';
import {WeatherDataService} from './services/weather-data.service'
import { WeatherData } from './models/weather.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  search = new FormControl('');
  list: any[] = [];

constructor(private weatherDataService: WeatherDataService){

}


addWeather()
  {
    this.list.push({id: this.list.length + 1, name: this.search.value});
    console.warn(this.list);

    this.search.setValue('');
  }

cityName: string = 'Sambrial';
weatherData?: WeatherData;

ngOnInit(): void {
this.getWeatherData(this.cityName);
this.cityName = '';
}

// onSubmit() {
// this.getWeatherData(this.cityName);
// this.cityName = '';
// }

private getWeatherData(cityName: string) {
this.weatherDataService.getWeatherData(cityName).subscribe({
    next: (response) => {
    this.weatherData = response;
    console.log(response);
    }
});
}
}
