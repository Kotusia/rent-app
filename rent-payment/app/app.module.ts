import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { PaymentListComponent }  from './payment-list.component';
import { NewPaymentComponent }  from './new-payment.component';



@NgModule({
  imports:      [ BrowserModule,
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
