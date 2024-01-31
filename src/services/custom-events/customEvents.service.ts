import { TRACK_EVENT } from '../../constants/track-event.constant';
import { Dimensions } from '../../interfaces/utils';
import { PaqService } from '../paqService/paq.service';

export function trackEvent(category: string, action: string, name?: string, value?: number, dimensions?:Dimensions) {
  const eventArguments = [
    category,
    action,
    ...(name ? [name] : []),
    ...(name ? [value] : []),
    ...(dimensions ? [dimensions] : []),
  ];
  PaqService.push([TRACK_EVENT.CUSTOM_EVENT, ...eventArguments])
}
