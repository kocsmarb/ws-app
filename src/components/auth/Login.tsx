import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { style, Style } from './auth.style';

type Props = {
  login: (email: string, password: string) => void,
};

type State = {
  email: string,
  password: string,
};

class Login extends React.Component<Props & WithStyles<Style>, State> {

  state = {
    email: '',
    password: '',
  };

  handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [name]: event.target.value });
  }

  handleSubmit = () => {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    const { classes } = this.props;

    const form = (
      <React.Fragment>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <ValidatorForm
          onSubmit={this.handleSubmit}
          debounceTime={2000}
        >
          <div className={classes.form}>
            <TextValidator
              variant="outlined"
              margin="normal"
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
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              validators={['required',]}
              errorMessages={['this field is required']}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
          </div>
        </ValidatorForm>
      </React.Fragment>
    );

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          {
            form
          }
        </div>
      </Container>
    );
  }
}

export default withStyles(style)(Login);
