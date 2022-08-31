import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrency } from '../interfaces/currency';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CurencyService {
  constructor(private http: HttpClient) { }

  

  public getExchangeRate(): Observable<ICurrency[]> {
    const url =
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20220831&json';
    return this.http
      .get(url)
      .pipe(map((res: any) => res.map((item: any) => <ICurrency>{
        r030: item.r030,
        txt: item.txt,
        rate: item.rate,
        cc: item.cc,
        exchangedate: item.exchangedate
      }
      )))
  }




}
