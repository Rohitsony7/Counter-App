import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter-App';
  currentCount: number = 0;

  resetseMe = () => {
    this.currentCount = 0;
  };

  increaseMe = () => {
    if (this.currentCount >= 10) {
      alert('Current count upper limit exceeded.');
    } else {
      this.currentCount++;
    }
  };

  decreaseMe = () => {
    if (this.currentCount <= 0) {
      alert('Current count lower limit exceeded.');
    } else {
      this.currentCount--;
    }
  };
}
