import { PiwikProWindow } from '../../interfaces/piwikpro.window';
// interface Window {
//   _paq?: any;
// }
function push(collection: any[]) {
  if (!(window as PiwikProWindow)._paq) {
    (window as PiwikProWindow)._paq = [];
  }

  (window as PiwikProWindow)._paq.push(["setCustomUrl", window.location.pathname]);
  (window as PiwikProWindow)._paq.push(["setDocumentTitle", document.title]);
  console.log('Push', collection);
  return (window as PiwikProWindow)._paq.push(collection);
}

export const PaqService = {
  push,
}
