import { PiwikProWindow } from '../../interfaces/piwikpro.window';
import { IS_DEBUG } from '../../core';

export function push(data: any) {
  if (!(window as PiwikProWindow).dataLayer) {
    (window as PiwikProWindow).dataLayer = [];
  }

  IS_DEBUG && console.log('DataLayer push', data);
  return (window as PiwikProWindow).dataLayer.push(data);
}
