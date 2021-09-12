import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { FormsModule } from '@angular/forms';
import { SingleGameComponent } from './components/single-game/single-game.component';

@NgModule({
  declarations: [AppComponent, GamesComponent, AddGameComponent, SingleGameComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
