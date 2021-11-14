import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SuperheroProfileComponent } from "./superhero-profile/superhero-profile.component";
import { SuperheroToolbarComponent } from "./superhero-toolbar/superhero-toolbar.component";
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { SuperheroDataService } from 'src/app/data-services/superhero-data.service';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';
import { CreateSuperheroReactiveFormComponent } from './create-superhero-reactive-form/create-superhero-reactive-form.component';

@NgModule({
  declarations: [SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent,
    HomeComponent,
    CreateSuperheroComponent,
    CreateSuperheroReactiveFormComponent,
    ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  providers:[SuperheroDataService],
  exports: [
    SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent,
    HomeComponent,
    CreateSuperheroComponent,
    CreateSuperheroReactiveFormComponent
    ]
})
export class SuperheroesMaterialDesignModule { }
