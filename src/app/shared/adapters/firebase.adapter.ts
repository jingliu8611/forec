import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {THIRD_PARTIES} from '../constants/third-party-login';
import {AngularFireAuth} from 'angularfire2/auth/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseAdapter {


    constructor(private afAuth: AngularFireAuth) {
    }

    login(email, password) {
        return Observable.fromPromise(
            new Promise((resolve, reject) => {
                this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
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
                this.afAuth.auth.signInWithPopup(this.selectProvider(type)).then(
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
                this.afAuth.auth.signOut().then(
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
                this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
                    authState => resolve(authState)
                ).catch(
                    err => reject(err)
                );
            })
        );
    }

    getAuth() {
        return this.afAuth.authState;
    }

    private selectProvider(type) {
        switch (type) {
            case THIRD_PARTIES[0]:
                return new firebase.auth.GoogleAuthProvider();
            case THIRD_PARTIES[1]:
                return new firebase.auth.FacebookAuthProvider();
            default:
                return new firebase.auth.TwitterAuthProvider();
        }
    }
}
