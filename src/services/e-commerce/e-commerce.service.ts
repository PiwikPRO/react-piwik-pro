import { TRACK_EVENT } from '../../constants/track-event.constant'
import { PaqService } from '../paqService/paq.service'
import { Product } from '../../interfaces/product'
import { PaymentInformation } from '../../interfaces/payment'

export function addEcommerceItem(products: Product[]) {
  PaqService.push([TRACK_EVENT.ADD_ECOMMERCE_ITEM, products])
}

export function removeEcommerceItem(products: Product[]) {
  PaqService.push([TRACK_EVENT.REMOVE_ECOMMERCE_ITEM, products])
}

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
