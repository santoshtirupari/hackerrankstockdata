import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private http: HttpClient) { }

  getStockData(searchStr){
    return this.http.get('https://jsonmock.hackerrank.com/api/stocks?date='+searchStr ).pipe(map(res => res))
  }
}
