import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import SuperheroText from '../utilities/superhero-text';


@Component({
  selector: 'superhero-profile',
  templateUrl: './superhero-profile.component.html',
  styleUrls: ['./superhero-profile.component.css'],
  providers: [SuperheroText] //viewProviders not working as not available to projected content
})
export class SuperheroProfileComponent implements OnInit {

  showBorder: boolean = true;
  showBgColor: boolean = false;
  applyMargin: boolean = true;

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

}

// Create a type representing superhero
export type Superhero = {
  name: string;
  firstAppearance: number;
  livesIn: string;
}

