import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketPanelComponent } from './components/ticket-panel/ticket-panel.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { HoverShadowDirective } from './directives/hover-shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    TicketPanelComponent,
    TicketComponent,
    HoverShadowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
