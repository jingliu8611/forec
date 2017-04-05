import {Component, OnInit} from '@angular/core';
import {select} from 'ng2-redux';

@Component({
    selector: 'fc-stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
    @select(['login', 'authState']) authState;

    constructor() {
    }

    ngOnInit() {
    }

}
