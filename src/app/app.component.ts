import { Component, OnInit } from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {NgRedux, select} from 'ng2-redux';
import {IAppState} from './store';
import {INCREMENT} from './actions';

declare let $;

@Component({
  selector: 'fc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fc works!';
  displayName: string;
  photoURL: string;
  cuisines: any;
  @select('counter') count;

  constructor(
    private authService: AuthService,
    private ngRedux: NgRedux<IAppState>
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

    this.authService.getAuth().subscribe(
      authState => {
        if (!authState) {
          console.log('not logged in', authState);
          this.displayName = null;
          this.photoURL = null;
          return;
        }
        console.log('logged in', authState);
        // let userRef = this.af.database.object('/users/' + authState.uid);
        // userRef.subscribe(
        //   user => {
        //     console.log('user: ', user);
        //   }
        // );
        this.displayName = authState.auth['displayName'];
        this.photoURL = authState.auth['photoURL'];
      }
    );
  }

  increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
