import {Component, OnInit, AfterViewInit} from '@angular/core';

declare let $;

@Component({
    selector: 'fc-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $('.modal').modal();
    }

    openModal() {
        $('#modal1').modal('open');
    }
}
