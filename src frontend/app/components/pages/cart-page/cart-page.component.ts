import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { Cart } from 'src/app/shared/model/Cart';
import { CartItem } from 'src/app/shared/model/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  medicines: any;
  cartItem: CartItem;
  productId: number;
  constructor(
    private cartService: CartService,
    private medicine: MedicineService
  ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
    this.medicine.medicines().subscribe(
      (data: any) => {
        this.medicines = data;
        console.log(this.medicines);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeFromCart(cartItem: CartItem) {
    // this.cartService.removeFromcart(this.medicines.productId);
    this.medicines.splice(this.medicines.indexOf(this.cartItem));
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.medicines.productId, quantity);
  }
}
