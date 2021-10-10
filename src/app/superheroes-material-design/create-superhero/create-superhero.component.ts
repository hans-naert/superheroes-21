import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-superhero',
  templateUrl: './create-superhero.component.html',
  styleUrls: ['./create-superhero.component.css']
})
export class CreateSuperheroComponent implements OnInit {
  country = ""

  items: Array<string> = ["Laddu", "Cheeseburger", "Pizza"];
  addItem(event: any) {
    this.items.push(event.value);
  }
  removeHandler(item: string) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
