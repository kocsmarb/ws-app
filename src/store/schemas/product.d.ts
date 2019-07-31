export type Id = number;
export type Product = {
  id: Id,
  name: string,
  category: string
  description?: string
  price: number
  spicy?: boolean
  vegetarian?: boolean
};

export type Category = string;