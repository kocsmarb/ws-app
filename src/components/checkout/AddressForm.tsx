import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextValidator } from 'react-material-ui-form-validator';
import { Values } from './Checkout';

type Props = {
  values: Values,
  valueChange: (name: keyof Values) => (event: React.ChangeEvent<HTMLInputElement>) => void,
};

const AddressForm: React.FC<Props> = ({values, valueChange}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextValidator
              id="firstName"
              name="firstName"
              label="First name *"
              fullWidth
              autoComplete="fname"
              value={values.firstName}
              onChange={valueChange('firstName')}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextValidator
              id="lastName"
              name="lastName"
              label="Last name *"
              fullWidth
              autoComplete="lname"
              value={values.lastName}
              onChange={valueChange('lastName')}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
          <Grid item xs={12}>
            <TextValidator
              id="address"
              name="address"
              label="Address *"
              fullWidth
              autoComplete="billing address-line1"
              value={values.address}
              onChange={valueChange('address')}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
        </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
