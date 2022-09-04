import { Component, Input, OnInit } from '@angular/core';
import { ICurrency } from '../interfaces/currency';
import { CurrencyDataService } from '../services/currency-data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss'],
})
export class ConversionComponent implements OnInit {
  currencies$!: Observable<ICurrency[]>;
  selectedCurrency: string | undefined;
  amount: string = '';

  constructor(private currencyDataService: CurrencyDataService) { }

  ngOnInit(): void {
    this.currencies$ = this.currencyDataService.currencies;
    this.currencies$.subscribe((currencies) => this.selectedCurrency = currencies[0]?.cc);
  }
 
  getCurrencyRate(currencies: ICurrency[]): number {
    let foundedCurrency = currencies.find((currency) => currency.cc == this.selectedCurrency);
    return foundedCurrency?.rate ?? 0;
  }


}
