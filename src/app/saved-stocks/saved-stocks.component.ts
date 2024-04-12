import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-saved-stocks',
  templateUrl: './saved-stocks.component.html',
  styleUrls: ['./saved-stocks.component.css']
})
export class SavedStocksComponent {
  savedStocks: any[] = []; // Array to store saved stocks

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Încărcăm datele salvate din localStorage
    this.savedStocks = JSON.parse(localStorage.getItem('savedStocks') || '[]');
    console.log('Saved Stocks: ', this.savedStocks)
  }

  navigateToHome(): void {
    console.log("merge");
    this.router.navigate(['/']); // Modifică ruta dacă este nevoie
  }

}
