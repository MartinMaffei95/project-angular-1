import { Pizza } from 'src/interfaces/Pizza.interface';

export const allPizzas: Pizza[] = [
  {
    id: '1',
    image: './assets/images/muzzarella-pizza.jpg',
    title: 'Pizza de Muzzarella',
    subtitle: 'Pizza con doble muzzarella',
    ingredients: ['Salsa de tomate', 'Muzzarella'],
    price: 400,
  },
  {
    id: '2',
    image: './assets/images/salami-pizza.jpg',
    title: 'Pizza de salame y albahaca',
    subtitle: 'Pizza con salame, albahaca y nuestra salsa nueva',
    ingredients: ['Salsa de tomate', 'Salame', 'Queso', 'Albahaca'],
    price: 600,
  },
  {
    id: '3',
    image: './assets/images/jam-and-mushroom-pizza.jpg',
    title: 'Pizza de Jamón con champis',
    subtitle: 'Pizza con muzzarella, jamon, champignones y doble crema',
    ingredients: [
      'Salsa de tomate',
      'Jamón',
      'Champignon',
      'Queso',
      'Albahaca',
    ],
    price: 900,
  },
];
