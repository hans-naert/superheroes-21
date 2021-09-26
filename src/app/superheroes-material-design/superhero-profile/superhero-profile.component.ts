import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';


@Component({
  selector: 'superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers: [SuperheroText] //viewProviders not working as not available to projected content
})
export class SuperheroProfileComponent implements OnInit {

  cssClasses: {[key: string]: boolean} = {
    'show-border': true,
    'show-bg-color': true,
    'apply-margin': true
    }

    superheroName : string ="";

  fontSize="30";
  heroWeight:number=181;

  styles: {[key: string]: string} = {
    'font-size.pt': this.fontSize,
    'color': this.heroWeight > 180 ? 'red': 'black',
    'font-weight': this.heroWeight > 180 ? 'bold': 'normal',
    'text-decoration': this.heroWeight > 180 ? 'underline': 'none'
    }

  @Input() name = "Vives";
  @Input("lives-in") livesIn = "Europe";


  // create a private field
  private _firstAppearance: number = 2021;
  // use a public setter
  @Input()
  set firstAppearance(val: number) {
    if (val > 1950) {
      this._firstAppearance = val;
    } else {
      console.error("Superhero is too old");
    }
  }
  // getter for the use of template.
  get firstAppearance() {
    return this._firstAppearance;
  }

  @Output() flyWithSuperhero = new EventEmitter<Superhero>();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  constructor() { }

  ngOnInit(): void {
  }

  returnSuperheroData() {
    let hero = {
      name: this.name,
      livesIn: this.livesIn,
      firstAppearance: this._firstAppearance
    };
    this.flyWithSuperhero.emit(hero);
  }

  click_input(event: any)
  {
    this.superheroName=event.target.value
  }

}

// Create a type representing superhero
export type Superhero = {
  name: string;
  firstAppearance: number;
  livesIn: string;
}

