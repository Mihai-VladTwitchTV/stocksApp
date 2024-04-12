import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SavedStocksComponent } from './saved-stocks/saved-stocks.component';



const routes: Routes = [
  { path: '', component: AppComponent }, // Default route to AppComponent
  { path: 'saved-stocks', component: SavedStocksComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
