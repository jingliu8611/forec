import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store/lib/src/decorators/select';

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
