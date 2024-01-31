import { TRACK_EVENT } from '../../constants/track-event.constant';
import { Tracker } from '../../interfaces/tracker';
import { VisitorInfo } from '../../interfaces/visitorInfo';
import { PaqService } from '../paqService/paq.service';

export function getUserId(): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this:Tracker): void {
          resolve(this.getUserId());
        },
      ]);
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e);
      }
    }
  });
}

export function setUserId(userId: string): void {
  PaqService.push([TRACK_EVENT.SET_USER_ID, userId]);
}

export function resetUserId(): void {
  PaqService.push([TRACK_EVENT.RESET_USER_ID]);
}

export function getVisitorId(): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this: Tracker): void {
          resolve(this.getVisitorId());
        },
      ]);
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e);
      }
    }
  });
}


export function getVisitorInfo(): Promise<VisitorInfo> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this: Tracker): void {
          resolve(this.getVisitorInfo());
        },
      ]);
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e);
      }
    }
  });
}
