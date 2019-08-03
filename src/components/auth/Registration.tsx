import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { style, Style } from './auth.style';
import RegistrationSucceed from './RegistrationSucceed';

type Props = {
  register: (email: string, password: string) => void,
  registrationSucceed?: string,
};

type State = {
  email: string,
  password: string,
};

class Registration extends React.Component<Props & WithStyles<Style>, State> {

  state = {
    email: '',
    password: '',
  };

  handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [name]: event.target.value });
  }

  handleSubmit = () => {
    this.props.register(this.state.email, this.state.password);
  }

  render() {
    const { classes, registrationSucceed } = this.props;

    const form = (
      <React.Fragment>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <ValidatorForm
          onSubmit={this.handleSubmit}
          debounceTime={2000}
        >
          <div className={classes.form}>
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.email}
              onChange={this.handleChange('email')}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              validators={['required', 'minStringLength:8']}
              errorMessages={['this field is required', 'min 8 chars']}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          </div>
        </ValidatorForm>
      </React.Fragment>
    );

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          {
            registrationSucceed 
              ? <RegistrationSucceed email={registrationSucceed} /> 
              : form
          }
        </div>
      </Container>
        );
      }
    }
    
    export default withStyles(style)(Registration);
