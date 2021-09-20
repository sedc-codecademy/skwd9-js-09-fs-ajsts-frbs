import { Component, OnInit } from '@angular/core';
import { Smoothie } from 'src/app/interfaces/smoothie';
import { SmoothieService } from 'src/app/services/smoothie.service';

@Component({
  selector: 'app-smoothie-list',
  templateUrl: './smoothie-list.component.html',
  styleUrls: ['./smoothie-list.component.css'],
})
export class SmoothieListComponent implements OnInit {
  constructor(private smoothieService: SmoothieService) {}

  smoothies: Smoothie[];

  ngOnInit(): void {
    this.smoothies = this.smoothieService.loadSmoothies();
  }
}
