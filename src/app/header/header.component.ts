import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public icon: string | undefined;
  public cartItems = 0 as number;

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.icon = '../../assets/pizza.png';
    this.cartService.useAddToCart.subscribe(() => this.cartItems++);
    this.cartService.useRemoveFromCart.subscribe(() => this.cartItems--);
  }
  handleCart(): void {
    this.cartService.handleCart.emit();
  }
}
