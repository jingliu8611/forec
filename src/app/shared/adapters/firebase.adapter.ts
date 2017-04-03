import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Observable} from "rxjs";
import {THIRD_PARTIES} from "../constants/third-party-login";

@Injectable()
export class FirebaseAdapter {


    constructor(private af: AngularFire) {
    }

    login(email, password) {
        return Observable.fromPromise(
            new Promise((resolve, reject) => {
                this.af.auth.login({
                    // email: 'test@gmail.com',
                    // password: 'admin@123'
                    email: email,
                    password: password
                }, {
                    provider: AuthProviders.Password,
                    method: AuthMethods.Password
                }).then(
                    authState => resolve(authState)
                ).catch(
                    err => reject(err)
                )
            })
        );
    }

    thirdPartyLogin(type) {
        return Observable.fromPromise(
            new Promise((resolve, reject) => {
                this.af.auth.login({
                    provider: this.selectProvider(type),
                    method: AuthMethods.Popup
                }).then(
                    authState => resolve(authState)
                ).catch(
                    err => reject(err)
                );
            })
        );
    }

    logout() {
        return Observable.fromPromise(
            new Promise((resolve, reject) => {
                this.af.auth.logout().then(
                    () => resolve()
                ).catch(
                    err => reject(err)
                )
            })
        );
    }

    register(email, password) {
        return Observable.fromPromise(
            new Promise((resolve, reject) => {
                this.af.auth.createUser({
                    email: email,
                    password: password
                }).then(
                    authState => resolve(authState)
                ).catch(
                    err => reject(err)
                );
            })
        );
    }

    getAuth() {
        return this.af.auth;
    }

    private selectProvider(type) {
        switch (type) {
            case THIRD_PARTIES[0]:
                return AuthProviders.Google;
            case THIRD_PARTIES[1]:
                return AuthProviders.Facebook;
            default:
                return AuthProviders.Twitter;
        }
    }
}
