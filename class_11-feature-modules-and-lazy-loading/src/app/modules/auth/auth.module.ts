import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AuthRoutingModule } from '../auth-routing/auth-routing.module';




@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule, AuthRoutingModule
  ]
})
export class AuthModule { }
