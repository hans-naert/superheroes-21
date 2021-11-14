import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

import { SuperheroProfileComponent } from "./superhero-profile/superhero-profile.component";
import { SuperheroToolbarComponent } from "./superhero-toolbar/superhero-toolbar.component";
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { SuperheroDataService } from 'src/app/data-services/superhero-data.service';
import { CreateSuperheroComponent } from './create-superhero/create-superhero.component';

@NgModule({
  declarations: [SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent,
    HomeComponent,
    CreateSuperheroComponent,
    ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers:[SuperheroDataService],
  exports: [
    SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent,
    HomeComponent,
    CreateSuperheroComponent
    ]
})
export class SuperheroesMaterialDesignModule { }
