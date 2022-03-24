import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageViews } from '@piwikpro/react-piwik-pro'

export function useTrackPageViews() {
  const location = useLocation();

  useEffect(() => {
    PageViews.trackPageView(document.title)
  }, [ location ])
}
