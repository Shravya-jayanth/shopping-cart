import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {
  items;
  checkoutForm;
  total = 0;
   constructor(
    private cartService: CartService,
    private fromBuilder: FormBuilder
  ) {
    this.checkoutForm = this.fromBuilder.group({
      fname: '',
      mname: '',
      lname: '',
      address1: '',
      address2: '',
      email: '',
      city: '',
      state: '',
      zip: '',
      country:'',
      phoneNumber:''
    })
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  onSubmit(custmerData){
    console.warn("Your order has been submitted", custmerData);
    this.checkoutForm.reset();
    this.cartService.clearCart();
  }
  calculateTotal(){
    this.total = 0;
    for (var i = 0; i < this.items.length; i++) {
      let totalVal = Number(this.items[i].priceVal * this.items[i].addedToCart);
      this.total = Number(this.total) + Number(totalVal);
    }
  }
}
