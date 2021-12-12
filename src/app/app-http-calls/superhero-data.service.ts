import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from '../superheroes-material-design/models/superhero';

const URL_PREFIX = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {
  constructor(private httpClient: HttpClient) { }
  getHeroes() {
    let heroes: Observable<Array<Superhero>> = this.httpClient.get<Array<Superhero>>(`${URL_PREFIX}/heroes`);
    heroes.subscribe(
      {next :(data) => {
        console.log(data.map((hero) => ({
          "name": hero.name || "",
          "email": hero.email || "",
          "details": hero.details || "",
          "country": hero.country || "",
          "specialPowers": hero.specialPowers || [],
          "cardImage": hero.cardImage || "/defaultImage.jpg",
          "favFood": hero.favFood || []
        })))
      },
      error: () => ({})/** Error handling callback */,
      complete: () => ({})/** Done with the observable */,
    })
  }
}
