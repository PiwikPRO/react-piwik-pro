import { TRACK_EVENT } from '../../constants/track-event.constant'
import { PaqService } from '../paqService/paq.service'
import { Product } from '../../interfaces/product'
import { PaymentInformation } from '../../interfaces/payment'
import { Tracker } from '../../interfaces/tracker'

/**
 * @deprecated since version 1.3.1. Please use the ecommerceAddToCart instead.
 */
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
    productQuantity
  ])
}

export function ecommerceAddToCart(products: Product[]) {
  PaqService.push([TRACK_EVENT.ECOMMERCE_ADD_TO_CART, products])
}

/**
 * @deprecated since version 1.3.1. Please use the ecommerceRemoveFromCart instead.
 */
export function removeEcommerceItem(productSKU: string) {
  PaqService.push([TRACK_EVENT.REMOVE_ECOMMERCE_ITEM, productSKU])
}
export function ecommerceRemoveFromCart(products: Product[]) {
  PaqService.push([TRACK_EVENT.ECOMMERCE_REMOVE_FROM_CART, products])
}

/**
 * @deprecated since version 1.3.1.
 */
export function getEcommerceItems(): Promise<object> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this: Tracker): void {
          resolve(this.getEcommerceItems())
        }
      ])
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e)
      }
    }
  })
}

/**
 * @deprecated since version 1.3.1. Please use the ecommerceOrder instead.
 */
export function trackEcommerceOrder(
  orderId: string,
  orderGrandTotal: number,
  orderSubTotal?: number,
  orderTax?: number,
  orderShipping?: number,
  orderDiscount?: number
) {
  PaqService.push([
    TRACK_EVENT.TRACK_ECOMMERCE_ORDER,
    orderId,
    orderGrandTotal,
    orderSubTotal,
    orderTax,
    orderShipping,
    orderDiscount
  ])
}

export function ecommerceOrder(
  products: Product[],
  paymentInformation: PaymentInformation
) {
  PaqService.push([TRACK_EVENT.ECOMMERCE_ORDER, products, paymentInformation])
}

/**
 * @deprecated since version 1.3.1. Please use the ecommerceCartUpdate instead.
 */
export function trackEcommerceCartUpdate(cartAmount: number) {
  PaqService.push([TRACK_EVENT.TRACK_ECOMMERCE_CART_UPDATE, cartAmount])
}

export function ecommerceCartUpdate(
  products: Product[],
  grandTotal: PaymentInformation['grandTotal']
) {
  PaqService.push([TRACK_EVENT.ECOMMERCE_CART_UPDATE, products, grandTotal])
}

export function ecommerceProductDetailView(products: Product[]) {
  PaqService.push([TRACK_EVENT.ECOMMERCE_PRODUCT_DETAIL_VIEW, products])
}

/**
 * @deprecated since version 1.3.1.
 */
export function clearEcommerceCart() {
  PaqService.push([TRACK_EVENT.CLEAR_ECOMMERCE_CART])
}

/**
 * @deprecated since version 1.3.1.
 */
export function setEcommerceView(
  productSKU: string,
  productName?: string,
  productCategory?: string[],
  productPrice?: string
) {
  PaqService.push([
    TRACK_EVENT.SET_ECOMMERCE_VIEW,
    productSKU,
    productName,
    productCategory,
    productPrice
  ])
}
