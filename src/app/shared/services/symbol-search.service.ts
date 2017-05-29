import {Injectable} from '@angular/core';
import {SymbolSearchYahooAdapter} from '../adapters/symbol-search.yahoo.adapter';

@Injectable()
export class SymbolSearchService {
    constructor(
        private adapter: SymbolSearchYahooAdapter
    ) {}

    getSymbols(searchStr: string) {
        return this.adapter.getSymbols(searchStr);
    }
}