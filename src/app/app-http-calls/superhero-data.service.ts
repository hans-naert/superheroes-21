import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_PREFIX = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {
  constructor(private httpClient: HttpClient) { }
  getHeroes() {
    let heroes: Observable<any> = this.httpClient.get(`${URL_PREFIX}/heroes`);
    heroes.subscribe(
      (data) => {
        console.log(data.map((hero: any) => ({
          "name": hero.name || "",
          "email": hero.email || "",
          "details": hero.details || "",
          "country": hero.country || "",
          "specialPowers": hero.specialPowers || [],
          "cardImage": hero.cardImage || "/defaultImage.jpg",
          "favFood": hero.favFood || []
        })))
      },
      () => ({})/** Error handling callback */,
      () => ({})/** Done with the observable */,
    );;
  }
}
