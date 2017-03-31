import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {select} from 'ng2-redux';

// declare let $;

@Component({
  selector: 'fc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select(s => s.login.authState) authState;


  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.getAuth();
  }

  // ngAfterViewInit() {
  //   $('.modal').modal();
  // }
  //
  // openModal() {
  //   $('#modal1').modal('open');
  // }
}
