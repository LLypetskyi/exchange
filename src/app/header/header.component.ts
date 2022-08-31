import { Component, OnInit } from '@angular/core';
import { CurencyService } from '../services/curency.service';
import { ICurrency } from '../interfaces/currency';
import { Observable } from 'rxjs';
import { CurrencyDataService } from '../services/currency-data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currencies$!: Observable<ICurrency[]>;

  data = new Date();

  constructor(private currencyDataService: CurrencyDataService) { }

  ngOnInit(): void {
    this.currencies$ = this.currencyDataService.currencies;
  }


}
