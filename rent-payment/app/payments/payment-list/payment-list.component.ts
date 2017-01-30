import { Component, OnInit } from '@angular/core';
import { IPayment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  moduleId: module.id,
  selector: 'payment-list',
  templateUrl: "payment-list.html"
})

export class PaymentListComponent implements OnInit {

  title = 'List of payments';
  errorMessage: string;

  payments: IPayment[];

  constructor (private _paymentService: PaymentService){

  }

  ngOnInit(): void {
  this._paymentService.getPayments()
    .subscribe(payments => this.payments = payments,
              error => this.errorMessage = <any>error);
  }
}
