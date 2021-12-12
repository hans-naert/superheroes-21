import { Component, OnInit } from '@angular/core';
import { SuperheroDataService } from 'src/app/app-http-calls/superhero-data.service';


@Component({
  selector: 'app-superhero-grid-list',
  templateUrl: './superhero-grid-list.component.html',
  styleUrls: ['./superhero-grid-list.component.css']
})
export class SuperheroGridListComponent implements OnInit {

  constructor(private heroService: SuperheroDataService) { }

  ngOnInit(): void {
    this.heroService.getHeroes();
  }

}
