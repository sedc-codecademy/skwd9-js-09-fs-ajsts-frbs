import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { counterReducer } from './store/counter/counter.reducers';
import { AnimalsComponent } from './components/animals/animals.component';
import { animalReducer } from './store/animals/animals.reducer';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AnimalsComponent,
    AddAnimalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({ counter: counterReducer, animals: animalReducer }),
    StoreModule.forRoot(appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
