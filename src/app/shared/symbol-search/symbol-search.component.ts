import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {SymbolSearchService} from '../services/symbol-search.service';

declare let _;

@Component({
    selector: 'fc-symbol-search',
    templateUrl: './symbol-search.component.html',
    styleUrls: ['./symbol-search.component.scss']
})
export class SymbolSearchComponent implements OnInit, AfterViewInit {

    @ViewChild('symbolInput') symbolInputEl;
    symbolList = [];
    delayTime = 500;

    constructor(
        private symbolSearchService: SymbolSearchService
    ) {
    }

    ngOnInit() {}

    ngAfterViewInit() {
        this.initSearchEl();
    }

    initSearchEl() {
        this.symbolInputEl.nativeElement.addEventListener('keyup', _.debounce(() => {
            this.symbolSearchService.getSymbols(this.symbolInputEl.nativeElement.value).subscribe(
                res => {
                    this.symbolList = res.ResultSet.Result;
                }
            );
        }, this.delayTime));
    }
}
