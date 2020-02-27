import { Component, OnInit,  HostListener } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items;
  counter = 0;
  constructor(private cartData: CartService) { }

  ngOnInit() {
    this.items = this.cartData.getItems();
    this.counter = this.cartData.getCartVal();   
  }

  cartCountVal(data) {
    this.counter = data;
    console.log(data)
  }

}
