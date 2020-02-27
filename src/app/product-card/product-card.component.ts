import { Component, Output, EventEmitter } from '@angular/core';
import { products } from "../products";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  productsdata = products;
  product;
  constructor( private header: NavComponent, private route: ActivatedRoute,private cart: CartService) {
    
   }
  
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

  addToCart(product) {
    this.cart.addToCart(product);
    this.cart.getCartCount(product);
    let data = this.cart.getCartVal();
    this.header.cartCountVal(data);
  }
}
