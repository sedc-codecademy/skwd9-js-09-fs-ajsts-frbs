import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketStatus } from 'src/app/interfaces/ticket-status.enum';

@Component({
  selector: 'app-ticket-panel',
  templateUrl: './ticket-panel.component.html',
  styleUrls: ['./ticket-panel.component.css'],
})
export class TicketPanelComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() tickets: Ticket[];
  filteredTickets: Ticket[];
  public ticketStatusEnum = TicketStatus;
  public displayTicketOnScreen: boolean = false;
  public ticketToDisplay: Ticket;
  public randomColor: string;

  /*
  Component Hooks:
  constructor()
  OnInit
  DoCheck
  OnChanges
  OnDestroy

  Component's children's hooks
  AfterContentInit
  AfterContentChecked
  AfterViewInit
  AfterViewChecked
  */

  /* Called in the bootstrapping phase
  This phase is when Angular creates the instances of services, pipes, components, and directives 
  in our module. Angular initializes the component and resolves 
  its dependencies and passes it to the constructor.
  */
  constructor() {
    console.log('Constructor called!');
  }

  /*
  Is a lifecycle hook called after Angular has initialized all data.
  Called in the change detection phase.
  is called after the component tree has been constructed, 
  and the dependencies are resolved and passed to the component/directive’s instances.
  */
  ngOnInit(): void {
    console.log('OnInit called!');
    this.filteredTickets = this.tickets;
  }

  // Called after a bound property changes
  // Very simply, ngOnChanges is run when the component/directive’s input bindings have changed.
  ngOnChanges() {
    console.log('OnChanges called!');
  }

  /* DoCheck is a callback method that performs change detection, 
  invoked after the default change detector runs.
  This hook comes after the OnInit hook. 
  DoCheck is not run on an event like OnInit and OnChanges, 
  which are called when a change in input properties occurs or when the component/directive is 
  initialized. Instead, 
  this hook is added so the developer can add his or her custom code to perform a custom CD.
  */
  ngDoCheck() {
    console.log('DoCheck called!');
  }

  /*
  AfterContentInit is called when the content of a component/directive has initialized.
  */
  ngAfterContentInit() {
    console.log('AfterContentInitialized called!');
  }
  /*
  This is hook is called after the default change detector for the 
  component/directive projected into a component via the ng-content tag has completed its check
  */
  ngAfterContentChecked() {
    console.log('AfterContentChecked called!');
  }

  /*
  This hook is called after a component’s view and its children’s views 
  have been created and fully initialized.
  This hook comes in handy when we want to reference a 
  component/directive instance in our component using ViewChild/ViewChildren.
  */
  ngAfterViewInit() {
    console.log('AfterViewInit called!');
  }

  /*
  This hook is called after the change detector of a component/directive’s child component 
  has been run for checks.

  Be careful not to set any variables bound to the template here. 
  If you do, you’ll receive the "Expression has changed after it was checked" error.
  */

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!');
  }

  /*
  OnDestroy is lifecycle hook that is called when a directive, pipe, or service is destroyed. 
  Use this for any custom cleanup that needs to occur when the instance is destroyed.
  */

  ngOnDestroy() {
    console.log('OnDestroy called!');
  }

  filterTicketsByStatus(status: TicketStatus) {
    this.filteredTickets = this.tickets.filter(
      (ticket) => ticket.status === status
    );
    console.log(this.filteredTickets);
  }

  displayTicket(ticketToDisplay: Ticket) {
    console.log('Display ticket called!');
    console.log(ticketToDisplay);

    this.displayTicketOnScreen = true;
    this.ticketToDisplay = ticketToDisplay;
  }

  clearScreen() {
    this.displayTicketOnScreen = false;
  }

  generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.randomColor = `#${randomColor}`
  }
}
