import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
