import { Button, Stack, TextField } from '@mui/material'
import { useEffect } from 'react'
import { ContentTracking } from '@piwikpro/react-piwik-pro'

export function Login() {
  // NOTE: candidate for a custom hook useTrackAllContentImpressions()
  useEffect(() => {
    ContentTracking.trackAllContentImpressions()

    return () => ContentTracking.clearTrackedContentImpressions()
  }, [])

  return (
    <Stack gap={2} data-track-content data-content-name='Login form'>
      <TextField label='Login' data-content-piece='Login input' />
      <TextField label='Password' data-content-piece='Password input' />
      <Button variant='contained' data-content-piece='Login button'>
        Login
      </Button>
    </Stack>
  )
}
