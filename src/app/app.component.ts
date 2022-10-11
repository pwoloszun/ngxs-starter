import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Local Counter', path: '/local-counter' },
    { text: 'Global Counter', path: '/global-counter' },
  ];

}
