import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/interfaces/Pizza.interface';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardData = {} as Pizza;
  public isOnCart: boolean = false;

  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartService.useAddToCart.subscribe();
  }

  addToCart(data: Pizza): void {
    this.cartService.useAddToCart.emit(data);
    this.isOnCart = true;
  }
  removeFromCart(data: Pizza): void {
    this.cartService.useRemoveFromCart.emit(data);
    this.isOnCart = false;
  }
}
