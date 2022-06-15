import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private Http:HttpClient) { }

  getWeatherData(cityName: string){
    this.Http.get(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
