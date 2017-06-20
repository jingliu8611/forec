import {Component, OnInit} from '@angular/core';
import {routerAnimations} from '../constants/animations';

@Component({
    selector: 'fc-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    host: {
        '[@routerAnimations]': 'true',
        '[style.position]': "'absolute'"
    },
    animations: [routerAnimations]
})
export class DashboardComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
