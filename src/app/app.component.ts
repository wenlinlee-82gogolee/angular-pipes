import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camery',
    year: 2000,
  };

  onNameChange(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
  onDateChange(event: Event) {
    this.date = (<HTMLInputElement>event.target).value;
  }

  onAmountChange(event: Event) {
    this.amount = parseFloat((<HTMLInputElement>event.target).value);
  }
  onHeightChange(event: Event) {
    this.height = parseFloat((<HTMLInputElement>event.target).value);
  }
  onMilesChange(event: Event) {
    this.miles = parseFloat((<HTMLInputElement>event.target).value);
  }
}
