import { describe, it, expect } from 'vitest'
import * as ReactPiwikPro from '../index'

// Services are re-exported from tracking-base-library (the core).
const EXPECTED_SERVICES = [
  'PageViews',
  'CustomEvent',
  'ContentTracking',
  'CookieManagement',
  'CustomDimensions',
  'DownloadAndOutlink',
  'eCommerce',
  'GoalConversions',
  'SiteSearch',
  'UserManagement',
  'DataLayer',
  'ErrorTracking',
  'CrossDomainTracking',
  'ClientConfiguration',
  'Heartbeat',
  'Miscellaneous'
] as const

describe('public surface of @piwikpro/react-piwik-pro', () => {
  it.each(EXPECTED_SERVICES)('re-exports the "%s" service', (name) => {
    expect(ReactPiwikPro[name]).toBeDefined()
  })

  it('default export exposes initialize() and getInitScript()', () => {
    expect(typeof ReactPiwikPro.default.initialize).toBe('function')
    expect(typeof ReactPiwikPro.default.getInitScript).toBe('function')
  })
})
