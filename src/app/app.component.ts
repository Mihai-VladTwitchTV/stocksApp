import { Component } from '@angular/core';
import { StocksService } from './stocks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: any[] = [];
  keys: string[] = []; // Declare keys property to store field names
  dataFetched: boolean = false; // Track whether data has been fetched

  constructor(private stocksService: StocksService) {}

  saveStock(stock : Observable<any>){}

  get() {
    this.stocksService.getStocksInfo().subscribe((data: any[]) => {
      this.stocks = data;
      this.dataFetched = true;
      // Get field names from the first object
      if (this.stocks.length > 0) {
        this.keys = Object.keys(this.stocks[0]);
      }
    });
  }
}
