import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store';
import {NOT_LOGGED_IN, GET_AUTH_REQUEST, GET_AUTH_ERROR, LOGGED_IN} from '../../actions';

@Injectable()
export class AuthService {
  thirdParties = [
    'Google',
    'Facebook',
    'Twitter'
  ];

  constructor(
    private af: AngularFire,
    private ngRedux: NgRedux<IAppState>
  ) {

  }

  public login() {
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

  public thirdPartyLogin(type = this.thirdParties[1]) {
    this.af.auth.login({
      provider: this.selectProvider(type),
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
    this.ngRedux.dispatch({type: GET_AUTH_REQUEST});
    this.af.auth.subscribe(
      authState => {
        if (!authState) {
          console.log('auth service - not logged in', authState);
          this.ngRedux.dispatch({type: NOT_LOGGED_IN});
        } else {
          console.log('auth service - logged in', authState);
          this.ngRedux.dispatch({type: LOGGED_IN, authState: authState});
        }
      },
      err => {
        this.ngRedux.dispatch({type: GET_AUTH_ERROR});
      }
    );
  }

  public getTestCuisines() {
    return this.af.database.list('cuisines');
  }

  private selectProvider(type) {
    switch (type) {
      case this.thirdParties[0]:
        return AuthProviders.Google;
      case this.thirdParties[1]:
        return AuthProviders.Facebook;
      default:
        return AuthProviders.Twitter;
    }
  }
}
