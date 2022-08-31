import { Pipe, PipeTransform } from '@angular/core';
import { ICurrency } from '../interfaces/currency';

@Pipe({
  name: 'currencyFilter'
})
export class CurrencyFilterPipe implements PipeTransform {
  findArr: string[] = ['PLN', 'USD', 'EUR', 'GBP'];
  transform(value: ICurrency[]) {
    return value.filter(item => this.findArr.includes(item.cc));
  }
}
