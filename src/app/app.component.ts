import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestementResultsComponent } from './components/investement-results/investement-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestementResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsDisplayed = false;

  displayResults() {
    this.resultsDisplayed = true;
  }
}
