import { TRACK_EVENT } from '../../constants/track-event.constant';
import { PaqService } from '../paqService/paq.service';

export function trackGoal(goalId: number | string, conversionValue: number, dimensions?: Object) {
  PaqService.push([
    TRACK_EVENT.GOAL,
    goalId,
    conversionValue,
    ...(dimensions ? [{ ...dimensions }] : [])
  ])
}
