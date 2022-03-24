import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CustomEvent } from '@piwikpro/react-piwik-pro';
import { useSnackbar } from 'notistack';

export default function AddressForm() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onBlur={() => {
              CustomEvent.trackEvent('user_data_form', 'enter_name');
              enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'enter_name\')', { variant: 'success'})
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onBlur={() => {
              CustomEvent.trackEvent('user_data_form', 'enter_last_name');
              enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'enter_last_name\')', { variant: 'success'})
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onBlur={() => {
              CustomEvent.trackEvent('user_data_form', 'enter_address_1');
              enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'enter_address_1\')', { variant: 'success'})
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onBlur={() => {
              CustomEvent.trackEvent('user_data_form', 'enter_address_2');
              enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'enter_address_2\')', { variant: 'success'})
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onBlur={() => {
              CustomEvent.trackEvent('user_data_form', 'enter_city');
              enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'enter_city\')', { variant: 'success'})
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onBlur={() => {
              CustomEvent.trackEvent('user_data_form', 'enter_state');
              enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'enter_state\')', { variant: 'success'})
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onBlur={() => {
              CustomEvent.trackEvent('user_data_form', 'enter_postal_code');
              enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'enter_postal_code\')', { variant: 'success'})
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onBlur={() => {
              CustomEvent.trackEvent('user_data_form', 'enter_country');
              enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'enter_country\')', { variant: 'success'})
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox
              color="secondary"
              name="saveAddress"
              value="yes"
              onChange={(e) => {
                if (e.target.checked) {
                  CustomEvent.trackEvent('user_data_form', 'select_checkbox');
                  enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'select_checkbox\')', { variant: 'success'})
                } else {
                  CustomEvent.trackEvent('user_data_form', 'unselect_checkbox');
                  enqueueSnackbar('CustomEvent.trackEvent(\'user_data_form\', \'unselect_checkbox\')', { variant: 'error'})
                }
              }
              } />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
