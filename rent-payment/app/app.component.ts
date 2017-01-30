import { Component } from '@angular/core';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';
import { PaymentService } from './payments/payment.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ PaymentService]
})
export class AppComponent  {
  title = 'Rent Payment Administration Application';
}
