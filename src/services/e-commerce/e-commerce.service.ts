import { TRACK_EVENT } from '../../constants/track-event.constant';
import { PaqService } from '../paqService/paq.service';
import { Product } from '../../interfaces/product'

export function addEcommerceItem(product: Product) {
  PaqService.push([
    TRACK_EVENT.ADD_ECOMMERCE_ITEM,
    [{
      sku: product.sku,
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      brand: product.brand,
      variant: product.variant,
      customDimensions: product.customDimensions,
    }],
  ])
}

export function removeEcommerceItem(product: Product) {
  PaqService.push([
    TRACK_EVENT.REMOVE_ECOMMERCE_ITEM,
    product
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
