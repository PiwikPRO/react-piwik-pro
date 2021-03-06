import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import AddressForm from '../components/AddressForm';
import { CustomEvent } from '@piwikpro/react-piwik-pro';
import { useSnackbar } from 'notistack';
import Paper from '@mui/material/Paper';

export const CustomEventPage = () => {
  const [finish, setFinish] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    document.title = 'Custom Event';
  })

  return <>
    <Paper
      sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography component="h1" variant="h4" align="center">
        Custom Event Example
      </Typography>
      <React.Fragment>
        {finish ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your data.
            </Typography>
            <Typography variant="subtitle1">
              Thank you for filling in the form. Your data is not stored.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <AddressForm />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={() => {
                  setFinish(true);
                  CustomEvent.trackEvent('user_data_form', 'submit');
                  enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'submit\')', { variant: 'success'})
                }}
                sx={{ mt: 3, ml: 1 }}
              >
                Submit
              </Button>
            </Box>
          </React.Fragment>
        )}
      </React.Fragment>
    </Paper>
  </>;
}
