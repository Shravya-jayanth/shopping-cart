import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  total = 0;

  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.items = this.cartService.getItems();
    this.calculateTotal();
    
  }
  calculateTotal(){
    this.total = 0;
    for (var i = 0; i < this.items.length; i++) {
      let totalVal = Number(this.items[i].priceVal * this.items[i].addedToCart);
      this.total = Number(this.total) + Number(totalVal);
    }
  }
  clearCart() {
    this.items = this.cartService.clearCart();
  }

  removeFromCart(removeData) {
    this.items = this.items.filter(items => items.id !== removeData.id);
    this.calculateTotal();
  }

  decProductCount(item) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        if (this.items[i].addedToCart === 1) {
          this.removeFromCart(item);
        }
        else {
          this.items[i].addedToCart -= 1;
        }
      }
    }
    this.calculateTotal();
  }
  incProductCount(item) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        this.items[i].addedToCart += 1;
      }
    }
    this.calculateTotal();
  }
  
}
