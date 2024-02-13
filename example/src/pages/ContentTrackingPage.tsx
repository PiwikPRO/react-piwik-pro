import { Box, CircularProgress } from '@mui/material'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { FunctionComponent, useEffect, useState } from 'react'
import { ContentTrackingMethods } from '../components/ContentTracking/ContentTrackingMethods'
import { ContentTrackingForm } from '../components/ContentTrackingForm/ContentTrackingForm'

const ContentTrackingPage: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.title = 'Content Tracking'
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography component='h1' variant='h4' align='center'>
        Content Tracking Example
      </Typography>

      <Box>
        <Paper sx={{ p: 5, mt: 5 }}>
          <Typography
            data-track-content
            data-content-name='block'
            data-content-piece='paragraph'
            data-content-target='target'
          >
            This element will be tracked automatically if it's present in DOM
            before tracking script is loaded and `Interactions with popups and
            content` setting is turned on in the administration panel
          </Typography>
        </Paper>

        <Paper sx={{ mt: 5, p: 3 }}>
          <Typography>
            For content that will appear later in the DOM, like modals or
            components that are waiting for data to be loaded, use{' '}
            <b>ContentTracking</b> module
          </Typography>

          <Box sx={{ py: 5 }}>
            {isLoading ? <CircularProgress /> : <ContentTrackingMethods />}
          </Box>
        </Paper>

        <Paper sx={{ mt: 3 }}>
          <ContentTrackingForm />
        </Paper>
      </Box>
    </Paper>
  )
}

export default ContentTrackingPage
