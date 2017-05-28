import {Component, OnInit} from '@angular/core';
import {SymbolSearchService} from '../services/symbol-search.service';

@Component({
    selector: 'fc-symbol-search',
    templateUrl: './symbol-search.component.html',
    styleUrls: ['./symbol-search.component.scss']
})
export class SymbolSearchComponent implements OnInit {
    symbolList = [];

    constructor(
        private symbolSearchService: SymbolSearchService
    ) {
    }

    ngOnInit() {
    }

    onSearchSymbol(searchStr) {
        this.symbolSearchService.getSymbols(searchStr).subscribe(
            res => {
                this.symbolList = res.ResultSet.Result;
            }
        );
    }
}
