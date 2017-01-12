import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Http} from '@angular/http';

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

  constructor(private af: AngularFire,
    private http: Http
  ) {
  }

  ngOnInit() {
    this.cuisines = this.af.database.list('cuisines');

    this.af.auth.subscribe(
      authState => {
        if (!authState) {
          console.log('not logged in');
          this.displayName = null;
          this.photoURL = null;
          return;
        }
        console.log('logged in', authState);
        let userRef = this.af.database.object('/users/' + authState.uid);
        userRef.subscribe(
          user => {
            console.log('user: ', user);
          }
        );
        this.displayName = authState.auth.displayName;
        this.photoURL = authState.auth.photoURL;
      }
    );
  }

  login() {
    this.af.auth.login({
      email: 'test@gmail.com',
      password: 'admin@123'
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then(
      authState => {
        console.log('after login: ', authState);
      }
    ).catch(
      error => {
        console.log('login error');
      }
    );
  }

  logout() {
    this.af.auth.logout();
  }

  register() {
    this.af.auth.createUser({
      email: 'test@gmail.com',
      password: 'admin@123'
    }).then(
      authState => {
        console.log('register: ', authState);
        authState.auth.sendEmailVerification();
      }
    ).catch(
      error => {
        console.log('error: ', error);
      }
    );
  }
}
