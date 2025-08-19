import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter();

  initialInvestment: number = 0;
  anualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 10;

  onClick() {
    console.log('CLICK!');
    console.log(
      this.initialInvestment,
      this.anualInvestment,
      this.expectedReturn,
      this.duration
    );

    this.calculate.emit({ displayResults: true });
  }
}
