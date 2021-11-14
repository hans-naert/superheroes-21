import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-create-superhero-reactive-form',
  templateUrl: './create-superhero-reactive-form.component.html',
  styleUrls: ['./create-superhero-reactive-form.component.css']
})
export class CreateSuperheroReactiveFormComponent implements OnInit {

  // Create an instance of FormControl using the FormBuilder
  name: FormControl = this.fb.control("", [Validators.required]);

  // Class variable representing FormGroup.
  superheroFormGroup: FormGroup;

  // Inject FormBuilder
  constructor(private fb: FormBuilder) {
    // Create FormGroup object with FormBuilder.
    this.superheroFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      details: ['',[ Validators.maxLength(100), Validators.minLength(5)] ],
      powers: '',
      country: ''
    });

    this.superheroFormGroup
      .valueChanges
      .subscribe(item =>
        console.log("Stream as form changes, ", item as Superhero));
  }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(result => console.log(result));
    setTimeout(() => this.name.setValue("Value set on timeout"), 3000);
  }

  changeHandler() {
    console.log("Log the snapshot at a point in time, ", this.name.value);
  }

  submitHandler() {
    let superhero = this.superheroFormGroup.value as Superhero;
    console.log("Superhero model object ", superhero);
  }

  public get email() {
    return this.superheroFormGroup.get('email');
    }

}
