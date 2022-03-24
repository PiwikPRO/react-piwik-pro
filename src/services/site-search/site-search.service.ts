import { TRACK_EVENT } from '../../constants/track-event.constant';
import { PaqService } from '../paqService/paq.service';

export function trackSiteSearch(keyword: string, category?: string, searchCount?: number, dimensions?: Object) {
  PaqService.push([
    TRACK_EVENT.SEARCH,
    keyword,
    category,
    searchCount,
    dimensions
  ])
}
