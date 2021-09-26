import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { SuperheroProfileComponent } from "./superhero-profile/superhero-profile.component";
import { SuperheroToolbarComponent } from "./superhero-toolbar/superhero-toolbar.component";
import { SuperheroProfileFooterComponent } from './superhero-profile-footer/superhero-profile-footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule
  ],
  exports: [
    SuperheroProfileComponent,
    SuperheroToolbarComponent,
    SuperheroProfileFooterComponent
    ]
})
export class SuperheroesMaterialDesignModule { }
