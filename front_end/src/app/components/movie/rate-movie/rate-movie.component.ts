import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-rate-movie',
  templateUrl: './rate-movie.component.html',
  styleUrls: ['./rate-movie.component.css'],
})
export class RateMovieComponent implements OnInit {
  rates: string[] = [];
  currentRate: string = '';
  @ViewChildren('inputRate') inputList!: QueryList<ElementRef>;
  constructor() {}

  ngOnInit(): void {
    this.rates = ['Terrible', 'Bad', 'Okay', 'Good', 'Great'];
  }

  ngAfterViewInit(): void {
    this.inputList.forEach((i) => {
      i.nativeElement.addEventListener('change', (e: Event) => {
        const elem = <HTMLInputElement>e.target;
        this.currentRate = this.rates[Number(elem.value) - 1];
      });
    });
  }
}
