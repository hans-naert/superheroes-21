import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  superheroes =[
    "Spiderman",
    "Chhota Bheem",
    "Superman",
    "Batman"
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
