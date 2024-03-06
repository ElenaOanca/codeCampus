import { Component } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];

  addItem(index: number) {
    this.cartItems[index].quantity++;
  }

  removeItem(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    } else {
      this.cartItems.splice(index, 1);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  checkout() {
    // Simulare il salvataggio degli articoli del carrello e il redirect alla pagina di conferma
    console.log("Articoli del carrello:", this.cartItems);
    console.log("Totale:", this.getTotal());
    // Qui potresti navigare alla tua pagina di conferma con i dati del carrello
  }
}
