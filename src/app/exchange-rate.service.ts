import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private URL = 'https://api.exchangerate.host/latest?base=USD&symbols=EUR,GBP';

  constructor(private http: HttpClient) {}
}
