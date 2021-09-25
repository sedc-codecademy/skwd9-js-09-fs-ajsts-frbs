import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { RandomComponent } from './components/random/random.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'random', component: RandomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
