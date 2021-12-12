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
    return this.httpClient.get<Array<Superhero>>(`${URL_PREFIX}/heroes`);
  }
}
