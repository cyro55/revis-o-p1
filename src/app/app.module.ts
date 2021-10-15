import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CyroCurrencyComponent } from './cyro-currency/cyro-currency.component';
import { CyroWalletComponent } from './cyro-wallet/cyro-wallet.component';
import { RouterModule } from '@angular/router';
import { CyroWalletService } from './cyro-wallet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      
  [ BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'currency', component: CyroCurrencyComponent},
        {path: 'wallet', component: CyroWalletComponent}
      ]
    )
   ],
  declarations: [ AppComponent, HelloComponent, CyroCurrencyComponent, CyroWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CyroWalletService],
})
export class AppModule { }
