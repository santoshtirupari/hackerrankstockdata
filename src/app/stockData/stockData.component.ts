import {Component, OnInit} from '@angular/core';
import {StockDataService} from "./stock-data.service";

@Component({
  selector: 'stock-data',
  templateUrl: './stockData.component.html',
  styleUrls: ['./stockData.component.scss']
})
export class StockData implements OnInit {
  public stockData;
  public error = false;
constructor(private readonly stockDataService: StockDataService) {
}
  ngOnInit() {

  }
  getStockData(query){
    this.stockDataService.getStockData(query.value).subscribe((response) => {
      this.error = false;
      this.stockData = response;
      console.log(this.stockData)
      if(this.stockData && this.stockData.data.length ==0){
        this.error = true
      }
    },error => {
      {
        this.error = true;
      }
    } )
  }
}
