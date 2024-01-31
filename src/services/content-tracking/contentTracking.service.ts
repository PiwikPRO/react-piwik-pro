import { TRACK_EVENT } from '../../constants/track-event.constant';
import { PaqService } from '../paqService/paq.service';

export function trackAllContentImpressions() {
  PaqService.push([
    TRACK_EVENT.ALL_CONTENT_IMPRESSIONS
  ]);
}

export function trackVisibleContentImpressions(checkOnScroll?: boolean, watchInterval?: number) {
  PaqService.push([
    TRACK_EVENT.VISIBLE_CONTENT_IMPRESSIONS,
    checkOnScroll,
    watchInterval,
  ]);
}

export function trackContentImpressionsWithinNode(domNode: Node) {
  PaqService.push([
    TRACK_EVENT.CONTENT_IMPRESSIONS_WITH_NODE,
    domNode
  ]);
}

export function trackContentImpression(contentName: string, contentPiece: string, contentTarget: string) {
  PaqService.push([
    TRACK_EVENT.CONTENT_IMPRESSION,
    contentName,
    contentPiece,
    contentTarget
  ]);
}

export function logAllContentBlocksOnPage(): void {
  PaqService.push([ TRACK_EVENT.LOG_ALL_CONTENT_BLOCKS_ON_PAGE ]);
}

export function trackContentInteractionNode(domNode: Node, contentInteraction: string) {
  PaqService.push([
    TRACK_EVENT.CONTENT_INTERACTION_NODE,
    domNode,
    contentInteraction,
  ]);
}

export function trackContentInteraction(contentInteraction: string, contentName: string, contentPiece: string, contentTarget: string) {
  PaqService.push([
    TRACK_EVENT.CONTENT_INTERACTION,
    contentInteraction,
    contentName,
    contentPiece,
    contentTarget
  ]);
}
