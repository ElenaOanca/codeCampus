// cart.component.ts
import { Component } from '@angular/core';

interface Item {
  name: string;
  sku: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: Item[] = [
    { name: 'Wine #1', sku: 'SKU Wine #1', price: 5.00, quantity: 10 },
    { name: 'Wine #3', sku: 'SKU Wine #3', price: 11.00, quantity: 1 }
  ];
  shipping: number = 10.00;

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
