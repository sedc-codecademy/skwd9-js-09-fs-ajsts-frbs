import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSmoothieComponent } from './components/add-smoothie/add-smoothie.component';
import { EditSmoothieComponent } from './components/edit-smoothie/edit-smoothie.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SmoothieListComponent } from './components/smoothie-list/smoothie-list.component';
import { SmoothieComponent } from './components/smoothie/smoothie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'smoothies', component: SmoothieListComponent }, //localhost:4200/smoothies
  { path: 'add-smoothie', component: AddSmoothieComponent },

  // { path: 'smoothie-to-edit/:id', component: SmoothieComponent },
  // { path: 'smoothie-to-edit/:id/edit', component: EditSmoothieComponent },

  {
    path: 'smoothie-to-edit/:id',
    component: SmoothieComponent,
    children: [{ path: 'edit', component: EditSmoothieComponent }],
  },
  // { path: '**', component: NotFoundComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
