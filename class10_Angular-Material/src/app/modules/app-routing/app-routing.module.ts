import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteThingsComponent } from 'src/app/components/favorite-things/favorite-things.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProductPanelComponent } from 'src/app/components/product-panel/product-panel.component';
import { RegisterStepperComponent } from 'src/app/components/register-stepper/register-stepper.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: LoginComponent,
  },
  {
    path: 'favorite',
    component: FavoriteThingsComponent,
  },
  {
    path: 'products',
    component: ProductPanelComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'stepper',
    component: RegisterStepperComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
