import { Button, Stack, TextField } from '@mui/material'
import { ContentTracking } from '@piwikpro/react-piwik-pro'
import { useEffect } from 'react'

export function Register() {
  useEffect(() => {
    ContentTracking.trackAllContentImpressions()

    return () => ContentTracking.clearTrackedContentImpressions()
  }, [])

  return (
    <Stack gap={2} data-track-content data-content-name='Register form'>
      <TextField label='Login' data-content-piece='Login input' />
      <TextField type='email' label='Email' data-content-piece='Email input' />
      <TextField
        type='password'
        label='Password'
        data-content-piece='Password input'
      />
      <TextField
        type='password'
        label='Confirm Password'
        data-content-piece='Confirm password input'
      />
      <Button variant='contained' data-content-piece='Register button'>
        Register
      </Button>
    </Stack>
  )
}
