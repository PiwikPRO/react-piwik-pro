import { TRACK_EVENT } from '../../constants/track-event.constant';
import { PaqService } from '../paqService/paq.service';

export function trackLink(url: string, linkType: string, customData?: object, callback?: (params: any) => void) {
  PaqService.push([
    TRACK_EVENT.LINK,
    url,
    linkType,
    customData,
    callback
  ]);
}

export function enableLinkTracking(enable: boolean) {
  PaqService.push([TRACK_EVENT.ENABLE_LINK_TRACKING, enable]);
}

export function setLinkClasses(classes: string[]) {
  PaqService.push([TRACK_EVENT.SET_LINK_CLASSES, classes]);
}

export function setDownloadClasses(classes: string[]) {
  PaqService.push([TRACK_EVENT.SET_DOWNLOAD_CLASSES, classes]);
}

export function setDownloadExtensions(extensions: string[]) {
  PaqService.push([TRACK_EVENT.SET_DOWNLOAD_EXTENSIONS, extensions]);
}

export function addDownloadExtensions(extensions: string[]) {
  PaqService.push([TRACK_EVENT.ADD_DOWNLOAD_EXTENSIONS, extensions]);
}

export function removeDownloadExtensions(extensions: string[]) {
  PaqService.push([TRACK_EVENT.REMOVE_DOWNLOAD_EXTENSIONS, extensions]);
}

export function setLinkTrackingTimer(time: number) {
  PaqService.push([TRACK_EVENT.SET_LINK_TRACKING_TIMER, time]);
}

export function getLinkTrackingTimer(): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this: any) {
          resolve(this.getLinkTrackingTimer());
        },
      ]);
    } catch (e) {
      if(e instanceof ReferenceError) {
        reject(e);
      }
    }
  });
}

export function setIgnoreClasses(classes: string[]) {
  PaqService.push([TRACK_EVENT.SET_IGNORE_CLASSES, classes]);
}
