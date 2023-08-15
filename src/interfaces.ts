export interface IProductArr {
  cartId: number;
  photoLink?: string;
  image?: string
  name: string;
  price: string;
  quantity: number;
}

export interface ICart {
  cartId: number;
  createdAt: string;
  extraDetail: string;
  id: number;
  product: IProductArr;
  productId: number;
  quantity: number;
}

export interface IHistoryCardProps {
  savedAt: string;
  id: number;
  cartItems: ICart[];
}


export interface Product {
  id: number;
  name: string;
  image?: string;
  photoLink?: string
  price: string;
  discount: string;
  category: string;
}

export interface IButton {
  buttonName1: string
  buttonName2: string
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

export interface UserState {
  id: null;
  name: string;
  email: string;
  photo: string;
  token: string;
  cart: any[];
  tempCartIds: any[];
}
