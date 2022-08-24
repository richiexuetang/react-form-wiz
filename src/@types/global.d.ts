export {};

declare global {
  //#region Button
  export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
  }
  //#endregion

  //#region Category
  interface CategoryItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
  }

  interface Category {
    title: string;
    imageUrl: string;
    items: CategoryItem[];
  }

  export type CategoryMap = {
    [key: string]: CategoryItem[];
  };
  //#endregion

  //#region Cart
  export enum CART_ACTION_TYPES {
    SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_CART_COUNT = 'cart/SET_CART_COUNT',
    SET_CART_TOTAL = 'cart/SET_CART_TOTAL',
  }

  export interface CartItem extends CategoryItem {
    quantity: number;
  }
  //#endregion

  //#region User
  interface UserData {
    createdDate: Date;
    displayName: string;
    email: string;
  }
  //#endregion

  //#region Form
  interface FormInputFields {
    displayName?: string;
    email: string;
    password: string;
  }
}
