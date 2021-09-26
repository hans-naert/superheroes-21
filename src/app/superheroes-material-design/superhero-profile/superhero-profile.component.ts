import { Component, Input, OnInit } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers: [ SuperheroText ] //viewProviders not working as not available to projected content
})
export class SuperheroProfileComponent implements OnInit {

  @Input() name="Vives";
  @Input() firstAppearance="2021";
  @Input("lives-in") livesIn="Europe";

  constructor() { }

  ngOnInit(): void {
  }

}
