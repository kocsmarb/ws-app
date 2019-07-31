import * as React from 'react';
import { 
  connect,
  MapDispatchToPropsFunction,
  MapStateToPropsParam,
} from 'react-redux';
import { AppState } from '../store/reducers';
import * as actionCreators from '../store/actions';
import List from '../components/products/List';
import { Product } from '../store/schemas/product';

type StateToProps = {
  products: Product[],
};

type DispatchToProps = {
  addToBasket: (product: Product) => void,
  fetchProducts: Function,
};

type Props = {
  category: string,
};

class ProductList extends React.Component<Props & StateToProps & DispatchToProps> {
  componentDidMount(){
    this.props.fetchProducts();
  }

  render() {
    return (
      <List
        items={this.props.products}
        title="List of Products"
        addToCart={this.props.addToBasket}
      />
    );
  }
}

const mapStateToProps: MapStateToPropsParam<StateToProps, Props, AppState> = (state) => ({
  products: state.products.items,
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchToProps, Props> = (dispatch: Function, ownProp) => ({
  addToBasket: (product: Product) => dispatch(actionCreators.basket.addItem(product)),
  fetchProducts: () => dispatch(actionCreators.products.fetch({
    category: ownProp.category,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);