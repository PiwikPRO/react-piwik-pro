import { TRACK_EVENT } from '../../constants/track-event.constant';
import { Tracker } from '../../interfaces/tracker';
import { PaqService } from '../paqService/paq.service';

export function setCustomDimensionValue(customDimensionId: string | number, customDimensionValue: string) {
  PaqService.push([TRACK_EVENT.SET_CUSTOM_DIMENSION_VALUE, customDimensionId, customDimensionValue]);
}

export function deleteCustomDimension(customDimensionId: string) {
  PaqService.push([TRACK_EVENT.DELETE_CUSTOM_DIMENSION, customDimensionId]);
}

export function getCustomDimensionValue(customDimensionId: string | number): Promise<string|undefined> {
  return new Promise((resolve, reject) => {
    try {
      PaqService.push([
        function (this: Tracker): void {
          resolve(this.getCustomDimensionValue(customDimensionId));
        },
      ]);
    } catch (e) {
      if (e instanceof ReferenceError) {
        reject(e);
      }
    }
  });
}
