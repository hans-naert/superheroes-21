import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'superhero-toolbar',
  templateUrl: './superhero-toolbar.component.html',
  styleUrls: ['./superhero-toolbar.component.css']
})
export class SuperheroToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// Create a type representing superhero
export type Superhero = {
  name: string;
  firstAppearance: number;
  livesIn: string;
  }
