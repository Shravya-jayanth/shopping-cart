import { Injectable } from "@angular/core";
import {
  HttpClientModule
} from '@angular/common/http';
@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  total = 0;
  cartCount = 0;

  constructor(private http: HttpClientModule) { }

  addToCart(product) {
    if (this.items.length === 0) {
      product.addedToCart = 1;
      this.items.push(product);
    } else {
      var repeat = false;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === product.id) {
          repeat = true;
          this.items[i].addedToCart += 1;
        }
      }
      if (!repeat) {
        product.addedToCart = 1;
        this.items.push(product);
      }
    }
  }

  getItems() {
    return this.items;
  }

  getCartCount(product) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].addedToCart > 0 && product.id === this.items[i].id) {
        this.cartCount += 1;
      }
    }
  }
  getCartVal() {
    return this.cartCount;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}