import { Component, OnInit } from '@angular/core';
import { CurrencyDataService } from '../services/currency-data-service.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  constructor(private currencyDataService: CurrencyDataService) { }

  ngOnInit(): void {
    
  }

}
