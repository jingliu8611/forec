import { Component, OnInit } from '@angular/core';
import {AuthService} from './shared/services/auth.service';

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

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
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
}
