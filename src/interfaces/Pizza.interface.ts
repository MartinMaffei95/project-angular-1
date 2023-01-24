export type Ingredient = string;

export interface Pizza {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  ingredients: Ingredient[];
  price: number;
}
