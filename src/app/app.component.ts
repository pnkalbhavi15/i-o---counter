import { Component, ɵɵngDeclareClassMetadata } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Counter App';
  count = 0;
  increase() {
    this.count = this.count + 1;
  }
  decrease() {
    this.count = this.count - 1;
  }
}
