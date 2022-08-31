import { Injectable } from '@angular/core';
import { ICurrency } from '../interfaces/currency';
import { CurencyService } from './curency.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {
  currencies!: Observable<ICurrency[]>;
  
  constructor(private curencyService: CurencyService) { 
  this.currencies =  this.curencyService.getExchangeRate()
  }
}
