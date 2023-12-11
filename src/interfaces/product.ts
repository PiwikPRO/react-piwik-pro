import { LimitedArrayFiveStrings } from './utils'

export type Product = {
  sku: string,
  name: string,
  category: LimitedArrayFiveStrings<string[]>,
  price: number,
  quantity: number,
  brand?: string,
  variant?: string,
  customDimensions?: object,
}
