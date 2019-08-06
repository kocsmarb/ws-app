import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MaskedInput from 'react-text-mask';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextValidator } from 'react-material-ui-form-validator';
import { Values } from './Checkout';

type Props = {
  values: Values,
  valueChange: (name: keyof Values) => (event: React.ChangeEvent<HTMLInputElement>) => void,
};

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

const AddressForm: React.FC<Props> = ({values, valueChange}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
            <TextValidator
              name="phone"
              label="Phone number *"
              fullWidth
              autoComplete="phone"
              value={values.phone}
              onChange={valueChange('phone')}
              InputProps={{
                inputComponent: TextMaskCustom as any,
                startAdornment: <InputAdornment position="start">+36</InputAdornment>,
              }}
              validators={['required','isPhoneNumber']}
              errorMessages={['this field is required', 'this field is required']}
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
