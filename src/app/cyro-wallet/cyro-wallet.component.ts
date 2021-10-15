import { Component, OnInit } from '@angular/core';
import { CyroWalletService } from '../cyro-wallet.service';

@Component({
  selector: 'app-cyro-wallet',
  templateUrl: './cyro-wallet.component.html',
  styleUrls: ['./cyro-wallet.component.css']
})
export class CyroWalletComponent implements OnInit {

  constructor(public wallet: CyroWalletService) { }

  ngOnInit() {
  }

}