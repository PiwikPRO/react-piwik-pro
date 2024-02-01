import { TRACK_EVENT } from '../../constants/track-event.constant';
import { Tracker } from '../../interfaces/tracker';
import { PaqService } from '../paqService/paq.service';

export function disableCookies() {
  PaqService.push([TRACK_EVENT.DISABLE_COOKIES]);

}

export function enableCookies() {
  PaqService.push([TRACK_EVENT.ENABLE_COOKIES]);

}

export function deleteCookies() {
  PaqService.push([TRACK_EVENT.DELETE_COOKIES]);

}

export function hasCookies(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this: Tracker) {
          resolve(this.hasCookies());
        },
      ]);
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e);
      }
    }
  });
}

export function setCookieNamePrefix(prefix: string) {
  PaqService.push([TRACK_EVENT.SET_COOKIE_NAME_PREFIX, prefix]);

}

export function setCookieDomain(domain: string) {
  PaqService.push([TRACK_EVENT.SET_COOKIE_DOMAIN, domain]);
}

export function setCookiePath(path: string) {
  PaqService.push([TRACK_EVENT.SET_COOKIE_PATH, path]);
}

export function setSecureCookie(secure: boolean) {
  PaqService.push([TRACK_EVENT.SET_SECURE_COOKIE, secure]);
}

export function setVisitorCookieTimeout(seconds: number) {
  PaqService.push([TRACK_EVENT.SET_VISITOR_COOKIE_TIMEOUT, seconds]);
}

export function setSessionCookieTimeout(seconds: number) {
  PaqService.push([TRACK_EVENT.SET_SESSION_COOKIE_TIMEOUT, seconds]);
}

export function setVisitorIdCookie(){
  PaqService.push([TRACK_EVENT.SET_VISITOR_ID_COOKIE]);

}
