import { Component, OnInit } from '@angular/core';
import { CyroWalletService } from '../cyro-wallet.service';

@Component({
  selector: 'app-cyro-currency',
  templateUrl: './cyro-currency.component.html',
  styleUrls: ['./cyro-currency.component.css']
})
export class CyroCurrencyComponent implements OnInit {

  constructor(public wallet: CyroWalletService) { 
    
  }

  ngOnInit() {
  }

}