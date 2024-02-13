import { Box, Button, Paper } from '@mui/material'
import { ElementRef, useEffect, useRef } from 'react'
import { ContentTracking } from '@piwikpro/react-piwik-pro'

export function ContentTrackingMethods() {
  const ref = useRef<ElementRef<'div'>>(null)

  useEffect(() => {
    if (!ref.current) return

    ContentTracking.trackContentImpressionsWithinNode(ref.current)
    ContentTracking.trackContentInteractionNode(ref.current, 'click')
  }, [])

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Box
          ref={ref}
          data-track-content
          data-content-name='element'
          data-content-piece='slow element'
        >
          Track content within a specific dom node
        </Box>
      </Paper>

      <Box sx={{ my: 5 }}>
        <Button
          variant='outlined'
          onClick={() =>
            ContentTracking.trackContentImpression(
              'tracking element',
              'button',
              'button'
            )
          }
        >
          Manual content tracking on demand
        </Button>
      </Box>
    </>
  )
}
