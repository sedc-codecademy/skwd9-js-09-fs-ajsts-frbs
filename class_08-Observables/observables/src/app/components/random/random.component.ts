import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Movie, RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  constructor(private randomService: RandomService) {}

  personName: FormControl;
  ngOnInit(): void {
    this.personName = new FormControl();
    this.personName.valueChanges
      .pipe(debounceTime(500))
      .subscribe((randomInput) =>
        this.randomService.handleRandomInput(randomInput)
      );

    setTimeout(() => {
      this.addMovie();
    }, 5000);
  }
  movie: Movie = {
    name: 'Lord of the rings',
    yearOfRelease: new Date(),
    producer: 'Nevermind',
    raiting: 'The best',
  };

  addMovie() {
    this.randomService.handleMovieSubject(this.movie);
  }
}
