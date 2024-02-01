import { TRACK_EVENT } from '../../constants/track-event.constant';
import { Dimensions } from '../../interfaces/utils';
import { PaqService } from '../paqService/paq.service';


export function trackGoal(goalId: number | string, conversionValue: number, dimensions?: Dimensions) {
  PaqService.push([
    TRACK_EVENT.GOAL,
    goalId,
    conversionValue,
    ...(dimensions ? [{ ...dimensions }] : [])
  ])
}
