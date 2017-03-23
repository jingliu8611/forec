import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'fc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
