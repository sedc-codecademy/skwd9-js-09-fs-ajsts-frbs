import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesComponent } from './components/games/games/games.component';
import { AddGameComponent } from './components/games/add-game/add-game.component';
import { LoggerService } from './components/games/games/services/logging.service';

@NgModule({
  declarations: [AppComponent, GamesComponent, AddGameComponent],
  imports: [BrowserModule],
  providers: [LoggerService], // We provide the LoggerService in the providers property which now means that LoggerService is accessible everywhere in our app.
  bootstrap: [AppComponent],
})
export class AppModule {}
