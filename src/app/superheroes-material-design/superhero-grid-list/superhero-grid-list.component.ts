import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperheroDataService } from 'src/app/app-http-calls/superhero-data.service';
import { Superhero } from '../models/superhero';


@Component({
  selector: 'app-superhero-grid-list',
  templateUrl: './superhero-grid-list.component.html',
  styleUrls: ['./superhero-grid-list.component.css']
})
export class SuperheroGridListComponent implements OnInit {

  constructor(private heroService: SuperheroDataService) { }

  heroes: Observable<Array<Superhero>> | undefined;

  ngOnInit(): void {
    this.heroes=this.heroService.getHeroes();
  }

}
