import { PiwikProWindow } from '../../interfaces/piwikpro.window';
import { IS_DEBUG } from '../../core';

function push(collection: any[]) {
  if (!(window as PiwikProWindow)._paq) {
    (window as PiwikProWindow)._paq = [];
  }

  (window as PiwikProWindow)._paq.push(["setCustomUrl", window.location.href]);
  (window as PiwikProWindow)._paq.push(["setDocumentTitle", document.title]);
  IS_DEBUG && console.log('Push', collection);
  return (window as PiwikProWindow)._paq.push(collection);
}

export const PaqService = {
  push,
}
