import { TRACK_EVENT } from '../../constants/track-event.constant'
import { PaqService } from '../paqService/paq.service'
import { Product } from '../../interfaces/product'
import { PaymentInformation } from '../../interfaces/payment'

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
        function (this: any): void {
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

export function ecommerceOrder(
  products: Product[],
  paymentInformation: PaymentInformation
) {
  PaqService.push([TRACK_EVENT.ORDER_ECOMMERCE, products, paymentInformation])
}

export function updateEcommerceCart(
  products: Product[],
  grandTotal: PaymentInformation['grandTotal']
) {
  PaqService.push([TRACK_EVENT.UPDATE_ECOMMERCE_CART, products, grandTotal])
}

export function ecommerceProductDetailView(products: Product[]) {
  PaqService.push([TRACK_EVENT.ECOMMERCE_PRODUCT_DETAIL_VIEW, products])
}

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
