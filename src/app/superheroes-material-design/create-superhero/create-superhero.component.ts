import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.css']
})
export class CreateSuperheroComponent implements OnInit {
  country = ""
  superhero: Superhero;
  items: Array<string> = ["Laddu", "Cheeseburger", "Pizza"];
  addItem(event: any) {
    this.items.push(event.value);
  }
  removeHandler(item: string) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  constructor() {
    this.superhero = new Superhero();
  }

  ngOnInit(): void {
  }

  get model(){
    return JSON.stringify(this.superhero);
    }

}
