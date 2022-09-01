import { Component, VERSION } from '@angular/core';
import { ExchangeRateService } from './exchange-rate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(service: ExchangeRateService) {}
}
