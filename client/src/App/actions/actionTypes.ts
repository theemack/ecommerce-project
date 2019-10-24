import { productData } from '../types/productData';
import { productCartData } from '../types/productCartData';
import { cartDataElements } from '../types/cartData';

// PRODUCTS
export const PRODUCTS_COUNT = 'PRODUCTS_COUNT';
export const PRODUCTS_GET_ALL = 'PRODUCTS_GET_ALL';
export const PRODUCTS_GET_ONE = 'PRODUCTS_GET_ONE';
export const PRODUCTS_EDIT_ONE = 'PRODUCTS_EDIT_ONE';
export const PRODUCTS_PUBLISH_ONE = 'PRODUCTS_PUBLISH_ONE';
export const PRODUCTS_DELETE_ONE = 'PRODUCTS_DELETE_ONE';
export const PRODUCTS_GET_ALL_LOADING = 'PRODUCTS_GET_ALL_LOADING';
export const PRODUCTS_GET_ALL_SUCCESS = 'PRODUCTS_GET_ALL_SUCCESS';
export const PRODUCTS_GET_ALL_FAIL = 'PRODUCTS_GET_ALL_FAIL';
export const PRODUCTS_GET_ONE_LOADING = 'PRODUCTS_GET_ONE_LOADING';
export const PRODUCTS_GET_ONE_SUCCESS = 'PRODUCTS_GET_ONE_SUCCESS';
export const PRODUCTS_GET_ONE_FAIL = 'PRODUCTS_GET_ONE_FAIL';

export const PRODUCTS_GET_CAROUSEL = 'PRODUCTS_GET_CAROUSEL';
export const PRODUCTS_GET_LATEST = 'PRODUCTS_GET_LATEST';

interface productsCountActionType {
  type: typeof PRODUCTS_COUNT;
  payload: number;
}

interface productsGetAllActionType {
  type: typeof PRODUCTS_GET_ALL;
  payload: productData[];
}

interface productsGetCarouselActionType {
  type: typeof PRODUCTS_GET_CAROUSEL;
  payload: productData[];
}

interface productsGetLatestActionType {
  type: typeof PRODUCTS_GET_LATEST;
  payload: productData[];
}

interface productsGetOneActionType {
  type: typeof PRODUCTS_GET_ONE;
  payload: productData;
}

interface productsEditOneActionType {
  type: typeof PRODUCTS_EDIT_ONE;
  payload: productData;
}

interface productsPublishOneActionType {
  type: typeof PRODUCTS_PUBLISH_ONE;
  payload: string;
}

interface productsDeleteOneActionType {
  type: typeof PRODUCTS_DELETE_ONE;
  payload: string;
}

interface productsGetAllLoadingActionType {
  type: typeof PRODUCTS_GET_ALL_LOADING;
}

interface productsGetAllSuccessActionType {
  type: typeof PRODUCTS_GET_ALL_SUCCESS;
}

interface productsGetAllFailActionType {
  type: typeof PRODUCTS_GET_ALL_FAIL;
  payload: string;
}

interface productsGetOneLoadingActionType {
  type: typeof PRODUCTS_GET_ONE_LOADING;
}

interface productsGetOneSuccessActionType {
  type: typeof PRODUCTS_GET_ONE_SUCCESS;
}

interface productsGetOneFailActionType {
  type: typeof PRODUCTS_GET_ONE_FAIL;
  payload: string;
}

// CART
export const CART_GET = 'CART_GET';
export const CART_UPDATE = 'CART_UPDATE';
export const CART_DELETE_ITEM = 'CART_DELETE_ITEM';
export const CART_GET_LOADING = 'CART_GET_LOADING';
export const CART_GET_SUCCESS = 'CART_GET_SUCCESS';
export const CART_GET_FAIL = 'CART_GET_FAIL';

interface cartGetActionType {
  type: typeof CART_GET;
  payload: (productCartData & cartDataElements | any)[];
}

interface cartUpdateActionType {
  type: typeof CART_UPDATE;
  payload: {
    id: string;
    quantity: any;
  };
}

interface cartDeleteItemActionType {
  type: typeof CART_DELETE_ITEM;
  payload: string;
}

interface cartGetLoadingActionType {
  type: typeof CART_GET_LOADING;
}

interface cartGetSuccessActionType {
  type: typeof CART_GET_SUCCESS;
}

interface cartGetFailActionType {
  type: typeof CART_GET_FAIL;
  payload: string;
}

// AUTH
export const AUTH_CHECK = 'AUTH_CHECK';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

interface authCheckActionType {
  type: typeof AUTH_CHECK;
  payload: {
    isLoggedIn: Boolean;
    isAdmin: Boolean;
  };
}

interface authLoginActionType {
  type: typeof AUTH_LOGIN;
  payload: {
    isLoggedIn: Boolean;
    isAdmin: Boolean;
  };
}

interface authLogoutActionType {
  type: typeof AUTH_LOGOUT;
}

interface authLoadingActionType {
  type: typeof AUTH_LOADING;
}

interface authSuccessActionType {
  type: typeof AUTH_SUCCESS;
}

interface authFailActionType {
  type: typeof AUTH_FAIL;
  payload: string;
}

export type ActionTypes =
  | productsCountActionType
  | productsGetAllActionType
  | productsGetCarouselActionType
  | productsGetLatestActionType
  | productsGetOneActionType
  | productsEditOneActionType
  | productsPublishOneActionType
  | productsDeleteOneActionType
  | productsGetAllLoadingActionType
  | productsGetAllSuccessActionType
  | productsGetAllFailActionType
  | productsGetOneLoadingActionType
  | productsGetOneSuccessActionType
  | productsGetOneFailActionType
  | cartGetActionType
  | cartUpdateActionType
  | cartDeleteItemActionType
  | cartGetLoadingActionType
  | cartGetSuccessActionType
  | cartGetFailActionType
  | authCheckActionType
  | authLoginActionType
  | authLogoutActionType
  | authLoadingActionType
  | authSuccessActionType
  | authFailActionType;
