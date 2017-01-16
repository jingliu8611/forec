import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    private af: AngularFire
  ) {

  }

  public login() {
    //noinspection TypeScriptUnresolvedFunction
    this.af.auth.login({
      email: 'test@gmail.com',
      password: 'admin@123'
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then(
      authState => {
        console.log('auth service logged in: ', authState);
      }
    ).catch(
      err => {
        console.log('login error: ', err);
      }
    );
  }

  public isAuthenticated() {
  }

  public logout() {
    this.af.auth.logout();
  }

  public register() {
    //noinspection TypeScriptUnresolvedFunction
    this.af.auth.createUser({
      email: 'test1@gmail.com',
      password: 'admin@123'
    }).then(
      authState => {
        console.log('auth service register: ', authState);
        authState.auth.sendEmailVerification();
      }
    ).catch(
      err => {
        console.log('register error: ', err);
      }
    );
  }

  public thirdPartyLogin() {
    //noinspection TypeScriptUnresolvedFunction
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(
      authState => {
        console.log('auth service logged in: ', authState);
      }
    ).catch(
      err => {
        console.log('login error: ', err);
      }
    );
  }

  getAuth() {
    return this.af.auth;
  }

  public getTestCuisines() {
    return this.af.database.list('cuisines');
  }
}
