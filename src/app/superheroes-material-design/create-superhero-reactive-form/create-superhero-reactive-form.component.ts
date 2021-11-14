import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Superhero } from '../models/superhero';
import * as moment from 'moment';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-create-superhero-reactive-form',
  templateUrl: './create-superhero-reactive-form.component.html',
  styleUrls: ['./create-superhero-reactive-form.component.css']
})
export class CreateSuperheroReactiveFormComponent implements OnInit {


  minRating: number = 1;
  maxRating: number = 10;
  rating: number = 8;

  cities = [{
    name: "New York",
    selectedByDefault: true
  }, {
    name: "Boston",
    selectedByDefault: false
  }, {
    name: "Hyderabad",
    selectedByDefault: false
  }, {
    name: "Bengaluru",
    selectedByDefault: true
  }];

  // Create an instance of FormControl using the FormBuilder
  name: FormControl = this.fb.control("", [Validators.required]);

  // Class variable representing FormGroup.
  superheroFormGroup: FormGroup;

  // Inject FormBuilder
  constructor(private fb: FormBuilder) {
    let j = this.cities.map(i => new FormControl(i.selectedByDefault));

    this.superheroFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      details: new FormControl('', [Validators.minLength(5), Validators.maxLength(100)]),
      powers: new FormControl(''),
      country: new FormControl(''),
      dob: new FormControl(new Date('05/20/2019')),
      rating: new FormControl(2),
      jurisdiction: new FormArray(j)
    });

  }

  /*get jurisdiction(): FormArray {
    return this.superheroFormGroup.get('jurisdiction') as FormArray;
}*/

  ngOnInit(): void {
    this.superheroFormGroup
      .valueChanges
      .subscribe(item =>
        console.log("Stream as form changes, ", item as Superhero));
    this.name.valueChanges.subscribe(result => console.log(result));
    setTimeout(() => this.name.setValue("Value set on timeout"), 3000);

    this.superheroFormGroup
      .valueChanges
      .subscribe(data => {
        data.jurisdiction.map((value:boolean, it: number) => console.log(this.cities[it].
          name, value));
      });

  }

  changeHandler() {
    console.log("Log the snapshot at a point in time, ", this.name.value);
  }

  submitHandler() {
    let superhero = this.superheroFormGroup.value as Superhero;
    console.log("Superhero model object ", superhero);
    console.log("Selected date value ", moment(this.superheroFormGroup.value.dob).toDate());

  }

  public get email() {
    return this.superheroFormGroup.get('email');
  }

  onToggleChange(event: MatSlideToggleChange) {
    console.log(event.checked);
  }
}
