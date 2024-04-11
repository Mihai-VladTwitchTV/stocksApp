import { Component } from '@angular/core';
import { StocksService } from './stocks.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: any[] = [];
  keys: string[] = []; // Declare keys property to store field names
  dataFetched: boolean = false; // Track whether data has been fetched
  

  years: number[] = [2022,2023,2024];
  months: string[] = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  days: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  
  selectedYear : number = 2022;
  selectedMonth: string = 'Jan';
  selectedDay: number = 1;



  constructor(private stocksService: StocksService,private router: Router) {}

  saveStock(stock : Observable<any>){
    //I NEED TO IMPLEMENT THIS I KEEP FORGETTING
  }


  onDateChange() {
    console.log("Date changed:", this.selectedYear, this.selectedMonth, this.selectedDay);
}

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

  getByDate(date : String){
    this.stocksService.getStocksByDate(date).subscribe((data: any[]) => {
      this.stocks = data;
      this.dataFetched = true;
      // Get field names from the first object
      if (this.stocks.length > 0) {
        this.keys = Object.keys(this.stocks[0]);
      }
    });
  }

  navigateToSavedStocks() {
    this.router.navigate(['/saved-stocks']);
  }
}
