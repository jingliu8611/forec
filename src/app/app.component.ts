import { Component } from '@angular/core';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'fc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fc works!';

  constructor(fc: AngularFire) {
    console.log(fc);
  }
}
