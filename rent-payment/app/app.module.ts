import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';;

import { AppComponent }  from './app.component';
import { PaymentListComponent }  from './payments/payment-list/payment-list.component';
import { NewPaymentComponent }  from './payments/new-payment/new-payment.component';



@NgModule({
  imports:      [ BrowserModule, HttpModule,
                  RouterModule.forRoot([
                    {
                      path: 'payment-list',
                      component: PaymentListComponent
                    },
                    {
                      path: 'new-payment',
                      component: NewPaymentComponent
                    }
                  ])
                ],
  declarations: [ AppComponent,
                  PaymentListComponent,
                  NewPaymentComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
