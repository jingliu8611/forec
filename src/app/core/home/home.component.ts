import {Component, OnInit} from '@angular/core';
import {routerAnimations} from '../../constants/animations';

@Component({
    selector: 'fc-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    host: {
        '[@routerAnimations]': 'true',
        '[style.position]': "'absolute'"
    },
    animations: [routerAnimations]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
