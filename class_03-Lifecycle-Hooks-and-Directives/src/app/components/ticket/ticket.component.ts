import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() emitTicket = new EventEmitter<Ticket>();

  constructor() {}

  ngOnInit(): void {}

  displayTicket(ticket: Ticket) {
    this.emitTicket.emit(ticket);
  }
}
