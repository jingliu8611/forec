import {Component, OnInit} from '@angular/core';
import {routerAnimations} from '../constants/animations';

@Component({
    selector: 'fc-formulas',
    templateUrl: './formulas.component.html',
    styleUrls: ['./formulas.component.scss'],
    host: {
        '[@routerAnimations]': 'true',
        '[style.position]': "'absolute'"
    },
    animations: [routerAnimations]
})
export class FormulasComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
