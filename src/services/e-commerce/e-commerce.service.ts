import { TRACK_EVENT } from '../../constants/track-event.constant';
import { PaqService } from '../paqService/paq.service';

export function addEcommerceItem(
  productSKU: string,
  productName: string,
  productCategory: string | string[],
  productPrice: number,
  productQuantity: number
) {
  PaqService.push([
    TRACK_EVENT.ADD_ECOMMERCE_ITEM,
    productSKU,
    productName,
    productCategory,
    productPrice,
    productQuantity,
  ])
}

export function removeEcommerceItem(productSKU: string) {
  PaqService.push([
    TRACK_EVENT.REMOVE_ECOMMERCE_ITEM,
    productSKU
  ])
}

export function clearEcommerceCart() {
  PaqService.push([
    TRACK_EVENT.CLEAR_ECOMMERCE_CART,
  ])
}

export function getEcommerceItems(): Promise<object> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this: any): void {
          resolve(this.getEcommerceItems());
        },
      ]);
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e);
      }
    }
  });
}

export function trackEcommerceOrder(
  orderId: string,
  orderGrandTotal: number,
  orderSubTotal?: number,
  orderTax?: number,
  orderShipping?: number,
  orderDiscount?: number
) {
  PaqService.push([
    TRACK_EVENT.ORDER_ECOMMERCE,
    orderId,
    orderGrandTotal,
    orderSubTotal,
    orderTax,
    orderShipping,
    orderDiscount,
  ]);
}

export function trackEcommerceCartUpdate(cartAmount: number) {
  PaqService.push([
    TRACK_EVENT.UPDATE_ECOMMERCE_CART,
    cartAmount
  ]);
}

export function setEcommerceView(productSKU: string, productName?: string, productCategory?: string[], productPrice?: string) {
  PaqService.push([
    TRACK_EVENT.SET_ECOMMERCE_VIEW,
    productSKU,
    productName,
    productCategory,
    productPrice
  ]);
}
