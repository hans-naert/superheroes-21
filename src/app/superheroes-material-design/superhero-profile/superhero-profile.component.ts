import { Component, OnInit } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';

@Component({
  selector: 'superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers: [ SuperheroText ] //viewProviders not working as not available to projected content
})
export class SuperheroProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
