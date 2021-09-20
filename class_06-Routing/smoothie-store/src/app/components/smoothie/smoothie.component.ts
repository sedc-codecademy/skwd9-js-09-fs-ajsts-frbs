import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smoothie } from 'src/app/interfaces/smoothie';
import { SmoothieService } from 'src/app/services/smoothie.service';

@Component({
  selector: 'app-smoothie',
  templateUrl: './smoothie.component.html',
  styleUrls: ['./smoothie.component.css'],
})
export class SmoothieComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private smoothieService: SmoothieService
  ) {}

  smoothie: Smoothie;
  didUpdate: boolean;

  ngOnInit(): void {
    const smoothieId = this.route.snapshot.params['id'];

    this.smoothie = this.smoothieService.loadSmoothieById(
      parseInt(smoothieId)
    )[0];
  }

  reloadSmoothieById() {
    this.smoothie = this.smoothieService.loadSmoothieById(
      parseInt(this.route.snapshot.params['id'])
    )[0];
  }
}
