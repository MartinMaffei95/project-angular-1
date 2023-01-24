import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/interfaces/Cart.interface';
import { Pizza } from 'src/interfaces/Pizza.interface';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public isOpen = false;
  public total = 0;
  constructor(private cartService: CartServiceService) {}
  public cart: CartItem[] = [];

  ngOnInit(): void {
    this.cartService.handleCart.subscribe(() => {
      this.isOpen = !this.isOpen;
    });
    const addToCart = (itemToAdd: Pizza) => {
      if (this.cart.find((itemOnCart) => itemOnCart.pizza.id === itemToAdd.id))
        return;

      this.cart.push({ pizza: itemToAdd, quantity: 1 });
      this.total = calculateTotal(this.cart);
    };

    const removeFromCart = (itemToAdd: Pizza) => {
      if (
        this.cart.find((itemOnCart) => itemOnCart.pizza.id === itemToAdd.id)
      ) {
        const filteredCart = this.cart.filter(
          (itemOnCart) => itemOnCart.pizza.id !== itemToAdd.id
        );
        this.total = calculateTotal(this.cart);
        return (this.cart = filteredCart);
      }
      return;
    };

    this.cartService.useAddToCart.subscribe((data) => addToCart(data));
    this.cartService.useRemoveFromCart.subscribe((data) =>
      removeFromCart(data)
    );
    this.total = calculateTotal(this.cart);
  }

  addOneItem = (itemToAdd: Pizza) => {
    //  First find the itme
    if (this.cart.find((itemOnCart) => itemOnCart.pizza.id === itemToAdd.id)) {
      const findedPizza = this.cart.find(
        (itemOnCart) => itemOnCart.pizza.id === itemToAdd.id
      );
      //  if find the item on cart  we add 1 to quantity

      if (findedPizza) {
        findedPizza.quantity += 1;
        return (this.total = calculateTotal(this.cart));
      }
    }
    return;
  };

  substractOneItem = (itemToAdd: Pizza) => {
    console.log(itemToAdd);
    //  First find the itme
    if (this.cart.find((itemOnCart) => itemOnCart.pizza.id === itemToAdd.id)) {
      const findedPizza = this.cart.find(
        (itemOnCart) => itemOnCart.pizza.id === itemToAdd.id
      );
      //  if find the item on cart  we add 1 to quantity

      if (findedPizza) {
        if (findedPizza.quantity - 1 <= 0) {
          const filteredCart = this.cart.filter(
            (itemOnCart) => itemOnCart.pizza.id !== itemToAdd.id
          );
          this.cart = filteredCart;
          return (this.total = calculateTotal(this.cart));
        }
        findedPizza.quantity -= 1;
        return (this.total = calculateTotal(this.cart));
      }
    }
    return;
  };

  handleCart(): void {
    this.isOpen = !this.isOpen;
  }
}

export const calculateTotal = (arr: CartItem[]): number => {
  let total = 0 as number;
  if (!arr || arr.length <= 0) return 0;
  arr.map((item) => {
    const price4item = item.pizza.price * item.quantity;
    total = total + price4item;
  });
  return total;
};
