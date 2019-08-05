import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Id, OrderInput, User } from '../../store/schemas';
import style, { Style } from './Checkout.style';
import { BasketItems } from '../../store/reducers/basket';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { ValidatorForm } from 'react-material-ui-form-validator';

type Props = WithStyles<Style> & {
  items: BasketItems,
  orderId?: Id,
  inProgress: boolean,
  currentUser?: User,
  createOrder: (checkoutId: Id, input: OrderInput) => void,
};

const steps = [
  'Shipping address',
  'Payment details',
  'Review your order'
];

export type Values = {
  firstName: string,
  lastName: string,
  address: string,
};

type State = {
  values: Values,
  activeStep: number,
  checkoutId: number,
};

class Checkout extends React.Component<Props, State> {
  state = {
    values: {
      firstName: '',
      lastName: '',
      address: '',
    },
    activeStep: 0,
    checkoutId: 0,
  };


  componentDidMount() {
    this.setState({ ...this.state, checkoutId: Date.now() });
  }

  getStepContent = (step: any) => {
    switch (step) {
      case 0:
        return (
          <AddressForm
            values={this.state.values}
            valueChange={this.handleValueChange}
          />
        );
      case 1:
        return <PaymentForm />;
      case 2:
        return (
          <Review
            items={this.props.items}
            values={this.state.values}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  }

  handleNext = () => {
    this.setState({
      ...this.state,
      activeStep: this.state.activeStep + 1
    });
  }

  handleBack = () => {
    this.setState({
      ...this.state,
      activeStep: this.state.activeStep - 1
    });
  }

  handleValueChange = (name: keyof Values) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, values: { ...this.state.values, [name]: event.target.value } });
  }

  handleSubmit = () => {
    this.state.activeStep === steps.length - 1
      ? this.finishOrder()
      : this.handleNext();
  }

  finishOrder = () => {
    if (!this.props.currentUser) {
      throw new Error('Oooops! You should not be here!');
    }

    const { firstName, lastName, address } = this.state.values;
    const { items } = this.props;

    this.props.createOrder(
      this.state.checkoutId,
      {
        firstName,
        lastName,
        address,
        items: Object.keys(items).map(id => ({
          productId: items[id].product.id,
          price: items[id].product.price,
          quantity: items[id].quantity,
        })),
        userId: this.props.currentUser.id,
      },
    );
  }

  render() {
    const { classes, inProgress, orderId } = this.props;
    const { activeStep } = this.state;

    const form = (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        instantValidate={false}
      >
        {this.getStepContent(activeStep)}
        <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button 
              onClick={this.handleBack} 
              className={classes.button}
            >
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            disabled={inProgress}
          >
            {activeStep === steps.length - 1 ? 'Finish order' : 'Next'}
          </Button>
        </div>
      </ValidatorForm>
    );

    const orderSucceed = (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Thank you for your order.
        </Typography>
        <Typography variant="subtitle1">
          Your order number is #{orderId}. We have emailed your order confirmation, and will
          send you an update when your order has shipped. But not in the demo app!
        </Typography>
      </React.Fragment>
    );

    return (
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {inProgress && (<p>Saving in progress...</p>)}
          {orderId ? orderSucceed : !inProgress && form}
        </React.Fragment>
      </Paper>
    );
  }

}

export default withStyles(style)(Checkout);
