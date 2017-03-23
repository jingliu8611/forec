import { Component, OnInit } from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {NgRedux, select} from 'ng2-redux';

declare let $;

@Component({
  selector: 'fc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fc works!';
  cuisines: any;
  @select(s => s.login.authState) authState;


  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );

    $(document).ready(function() {
      $('select').material_select();
    });
    this.cuisines = this.authService.getTestCuisines();

    this.authService.getAuth();
  }
}
