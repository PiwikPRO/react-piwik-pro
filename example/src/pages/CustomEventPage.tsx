import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FunctionComponent, useEffect, useState } from 'react'
import AddressForm from '../components/CustomEvent/AddressForm.tsx'
import { CustomEvent } from '@piwikpro/react-piwik-pro'
import { useSnackbar } from 'notistack'
import Paper from '@mui/material/Paper'

const CustomEventPage: FunctionComponent = () => {
  const [finish, setFinish] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    document.title = 'Custom Event'
  }, [])

  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography component='h1' variant='h4' align='center'>
          Custom Event Example
        </Typography>
        <>
          {finish ? (
            <>
              <Typography variant='h5' gutterBottom>
                Thank you for your data.
              </Typography>
              <Typography variant='subtitle1'>
                Thank you for filling in the form. Your data is not stored.
              </Typography>
            </>
          ) : (
            <>
              <AddressForm />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant='contained'
                  onClick={() => {
                    setFinish(true)
                    CustomEvent.trackEvent(
                      'user_data_form',
                      'submit',
                      'success',
                      10,
                      { dimension1: 'value1' }
                    )
                    enqueueSnackbar(
                      "CustomEvent.trackEvent('user_data_form', 'submit', 'success', 10, { dimension1: 'value1' })",
                      { variant: 'success' }
                    )
                  }}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Submit
                </Button>
              </Box>
            </>
          )}
        </>
      </Paper>
    </>
  )
}

export default CustomEventPage
