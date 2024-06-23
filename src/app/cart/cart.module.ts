import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
    imports: [
        CommonModule,
        CartRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule,
        CartComponent,
        PaymentInfoComponent
    ]
})
export class CartModule {

}
