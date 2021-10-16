import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

// Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';


import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoriteThingsComponent } from './components/favorite-things/favorite-things.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductPanelComponent } from './components/product-panel/product-panel.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterStepperComponent } from './components/register-stepper/register-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FavoriteThingsComponent,
    ProductPanelComponent,
    ProductCardComponent,
    RegisterComponent,
    RegisterStepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
