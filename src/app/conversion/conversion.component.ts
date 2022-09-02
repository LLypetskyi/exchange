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

  selectedValue: number = 1;
  selectedCarrency!: any;

  rez: number = 1;

  constructor(private currencyDataService: CurrencyDataService) { }

  ngOnInit(): void {
    this.currencies$ = this.currencyDataService.currencies;
  }
}
