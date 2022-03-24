import { TRACK_EVENT } from '../../constants/track-event.constant';
import { PaqService } from '../paqService/paq.service';

export function trackPageView(customPageTitle?: string) {
  PaqService.push([
    TRACK_EVENT.PAGE_VIEW,
    ...(customPageTitle ? [customPageTitle] : [])
  ]);
}
