import * as React from 'react';
import { 
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from 'react-redux';
import { AppState } from '../store/reducers';
import * as actionCreators from '../store/actions';
import List from '../components/products/List';
import { Product } from '../store/schemas';
import { withSnackbar, WithSnackbarProps } from 'notistack';

type StateToProps = {
  products: Product[],
  isAuth: boolean,
};

type DispatchToProps = {
  addToBasket: (product: Product) => void,
  fetchProducts: Function,
};

type Props = {
  category: string,
};

class ProductList extends React.Component<Props & StateToProps & DispatchToProps & WithSnackbarProps> {
  componentDidMount(){
    this.props.fetchProducts();
  }

  addToCart = (product: Product) => {
    this.props.isAuth 
      ? this.props.addToBasket(product)
      : this.props.enqueueSnackbar('You have to Sign In for this feature!', {variant: 'info'});
  };

  render() {
    return (
      <List
        items={this.props.products}
        title="List of Products"
        addToCart={this.addToCart}
      />
    );
  }
}

const mapStateToProps: MapStateToPropsParam<StateToProps, Props, AppState> = (state) => ({
  products: state.products.items,
  isAuth: !!state.auth.currentUser,
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchToProps, Props> = (dispatch: Function, ownProp) => ({
  addToBasket: (product: Product) => dispatch(actionCreators.basket.addItem(product)),
  fetchProducts: () => dispatch(actionCreators.products.fetch({
    category: ownProp.category,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(ProductList));