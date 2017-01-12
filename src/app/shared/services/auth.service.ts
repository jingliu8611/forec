import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';


declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  options = {
    language: 'zh'
  };
  lock = new Auth0Lock('5JlS6126NpWeqkivfqoDvfwf32Dx46YH', 'jingliu.auth0.com');

  constructor() {
    this.lock.on('authenticated',
      authResult => {
        console.log('auth result: ', authResult);
        localStorage.setItem('id_token', authResult.idToken);
      }
    );
  }

  public login() {
    this.lock.show(this.options);
  }

  public isAuthenticated() {
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem('id_token');
  }
}
