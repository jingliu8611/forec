import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store/lib/src/decorators/select';
import {routerAnimations} from '../constants/animations';

@Component({
    selector: 'fc-stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.scss'],
    host: {
        '[@routerAnimations]': 'true',
        '[style.position]': "'absolute'"
    },
    animations: [routerAnimations]
})
export class StocksComponent implements OnInit {
    @select(['login', 'authState']) authState;

    constructor() {
    }

    ngOnInit() {
    }

}
