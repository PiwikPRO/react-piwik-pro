import PiwikPro from '@piwikpro/tracking-base-library'
export * from '@piwikpro/tracking-base-library'
import { version } from '../package.json'
import { Miscellaneous, Initialize } from '@piwikpro/tracking-base-library'

const initialize: Initialize = (...args) => {
  if (typeof window !== 'undefined') {
    Miscellaneous.setTrackingSourceProvider('react', version)
  }

  PiwikPro.initialize(...args)
}

export default {
  initialize,
  getInitScript: PiwikPro.getInitScript,
}
