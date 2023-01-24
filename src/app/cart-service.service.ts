import { EventEmitter, Injectable, Output } from '@angular/core';
import { Pizza } from 'src/interfaces/Pizza.interface';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  @Output() useAddToCart: EventEmitter<Pizza> = new EventEmitter();
  @Output() useRemoveFromCart: EventEmitter<Pizza> = new EventEmitter();
  @Output() handleCart: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
