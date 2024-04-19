import { Typography } from '@mui/material'
import { useEffect } from 'react'

function HomePage() {
  useEffect(() => {
    document.title = 'Piwik Pro + Vite + React + TS'
  }, [])

  return (
    <>
      <Typography variant='h5'>
        This are the examples for the <code>@piwikpro/react-piwik-pro</code>{' '}
        package implementation.
      </Typography>
      <Typography variant='h5'>
        Check the Drawer on the left to see the use cases
      </Typography>
    </>
  )
}

export default HomePage
