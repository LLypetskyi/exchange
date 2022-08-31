import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConversionComponent } from './conversion/conversion.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyFilterPipe } from './pipes/currency-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversionComponent,
    CurrencyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
