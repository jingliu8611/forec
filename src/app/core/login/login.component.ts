import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {THIRD_PARTIES} from "../../shared/constants/third-party-login";

@Component({
  selector: 'fc-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  thirdParties =[];

  constructor(private authService: AuthService) {
    this.thirdParties = THIRD_PARTIES;
  }

  ngOnInit() {
  }

}
