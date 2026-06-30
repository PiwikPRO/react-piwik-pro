import * as PiwikPRO from '@piwikpro/tracking-base-library'
export * from '@piwikpro/tracking-base-library'
import { version } from '../package.json'
import { Miscellaneous, Initialize } from '@piwikpro/tracking-base-library'

const initialize: Initialize = (...args) => {
  if (typeof window !== 'undefined') {
    Miscellaneous.setTrackingSourceProvider('react', version)
  }

  PiwikPRO.default.initialize(...args)
}

// fixes some 'The inferred type of 'default' cannot be named without a reference to ...' error
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- required for portable .d.ts emit
export default {
  ...PiwikPRO.default,
  initialize
} as typeof PiwikPRO.default
