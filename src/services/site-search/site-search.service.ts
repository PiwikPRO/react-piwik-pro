import { TRACK_EVENT } from '../../constants/track-event.constant';
import { Dimensions } from '../../interfaces/utils';
import { PaqService } from '../paqService/paq.service';

export function trackSiteSearch(keyword: string, category?: string, searchCount?: number, dimensions?: Dimensions) {
  PaqService.push([
    TRACK_EVENT.SEARCH,
    keyword,
    category,
    searchCount,
    dimensions
  ])
}
