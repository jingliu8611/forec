import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

@Injectable()
export class SymbolSearchYahooAdapter {
    apiRoot: string = 'http://autoc.finance.yahoo.com/autoc';


    constructor(
        private jsonp: Jsonp
    ) {}

    getSymbols(searchStr: string) {
        let apiURL = `${this.apiRoot}?region=1&lang=en&query=${searchStr}&callback=JSONP_CALLBACK`;
        return this.jsonp.request(apiURL).map(res => {return res.json()});
    }
}