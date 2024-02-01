import { TRACK_EVENT } from '../../constants/track-event.constant';
import { Tracker } from '../../interfaces/tracker';
import { Dimensions } from '../../interfaces/utils';
import { PaqService } from '../paqService/paq.service';

export function trackLink(url: string, linkType: string, dimensions?: Dimensions, callback?: () => void) {
  PaqService.push([
    TRACK_EVENT.LINK,
    url,
    linkType,
    dimensions,
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

export function getLinkTrackingTimer(): Promise<number> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this: Tracker) {
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
