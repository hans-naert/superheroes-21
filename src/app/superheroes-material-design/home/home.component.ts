import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  superheroes = [
    "Spiderman",
    "Chhota Bheem",
    "Superman",
    "Batman"
  ]

  isItalic = false;
  isBold = false;
  isStrikeThrough = false;
  get titleStyle() {
    return {
      'text-decoration': this.isStrikeThrough ? 'line-through' : 'none',
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size': '24px'
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

}
