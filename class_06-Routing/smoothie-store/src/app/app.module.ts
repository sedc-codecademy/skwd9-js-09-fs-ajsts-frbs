import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SmoothieListComponent } from './components/smoothie-list/smoothie-list.component';
import { AddSmoothieComponent } from './components/add-smoothie/add-smoothie.component';
import { RouterModule, Routes } from '@angular/router';
import { SmoothieComponent } from './components/smoothie/smoothie.component';
import { EditSmoothieComponent } from './components/edit-smoothie/edit-smoothie.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmoothieListComponent,
    AddSmoothieComponent,
    SmoothieComponent,
    EditSmoothieComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
