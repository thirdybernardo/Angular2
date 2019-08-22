import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
    <pm-products></pm-products>
  </div>
  `

})
export class AppComponent {
  title: string = 'Angular: Getting Started';
}
