import { Component } from '@angular/core';
import { Superhero } from './superheroes-material-design/superhero-profile/superhero-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superheroes';

  printSuperhero(hero: Superhero) {
    console.log(hero); // print the received event object.
    }
}
