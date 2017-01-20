import { Component } from '@angular/core';
import { PaymentListComponent } from './payment-list.component'

@Component({
  selector: 'my-app',
  template: `
    <h1> {{title}}</h1>
    <nav class="navbar">
      <button><a routerLink="/payment-list">Payment List</a></button>
      <button><a routerLink="/new-payment">Add Payment</a></button>
    </nav>
    <router-outlet></router-outlet>
`,
})
export class AppComponent  {
  title = 'Rent Payment Administration Application';
}
