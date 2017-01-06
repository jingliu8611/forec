import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'fc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fc works!';
  cuisines: any;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.cuisines = this.af.database.list('cuisines');
  }
}
