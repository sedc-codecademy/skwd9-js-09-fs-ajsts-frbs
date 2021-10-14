import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from "./components/products/products.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { HomeComponent } from "./components/home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { appReducer } from "src/store/app.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ProductsEffects } from "src/store/products/products.effects";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EditProductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
