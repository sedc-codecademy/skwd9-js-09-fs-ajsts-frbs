import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Smoothie } from 'src/app/interfaces/smoothie';
import { SmoothieService } from 'src/app/services/smoothie.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-smoothie',
  templateUrl: './edit-smoothie.component.html',
  styleUrls: ['./edit-smoothie.component.css'],
})
export class EditSmoothieComponent implements OnInit {
  constructor(
    private smoothieService: SmoothieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  smoothieToEdit: Smoothie;

  newName: string = '';
  newPrice: string = '';

  ngOnInit(): void {
    // const smoothieId = parseInt(this.route.snapshot.params['id']);

    // As /edit component is now child route to SmoothieComponent we pass the id with query params
    const smoothieId = parseInt(this.route.snapshot.queryParams.smoothieToEdit);

    this.smoothieToEdit = this.smoothieService.loadSmoothieById(smoothieId)[0];

    this.newName = this.smoothieToEdit.name;
    this.newPrice = this.smoothieToEdit.price.toString();
  }

  saveChanges() {
    this.smoothieService.editSmoothie(
      this.smoothieToEdit.id,
      this.newName,
      parseInt(this.newPrice)
    );

    this.goToSmoothieList();
  }

  private goToSmoothieList() {
    this.router.navigate(['/smoothies']);
  }

  hasInputChanged() {
    return (
      this.newName !== this.smoothieToEdit.name ||
      parseInt(this.newPrice) !== this.smoothieToEdit.price
    );
  }
}
