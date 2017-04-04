import {Injectable} from '@angular/core';
import {FirebaseAdapter} from '../adapters/firebase.adapter';
import {THIRD_PARTIES} from '../constants/third-party-login';

@Injectable()
export class AuthService {

    constructor(private adapter: FirebaseAdapter) {
    }

    login(email, password) {
        return this.adapter.login(email, password);
    }

    logout() {
        return this.adapter.logout();
    }

    register(email, password) {
        return this.adapter.register(email, password);
    }

    thirdPartyLogin(thirPartyName = THIRD_PARTIES[1]) {
        return this.adapter.thirdPartyLogin(thirPartyName);
    }

    getAuth() {
        return this.adapter.getAuth();
    }
}
