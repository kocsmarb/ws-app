import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/reducers';
import * as actionCreators from '../store/actions';
import List from '../components/category/CategoryList';
import { Category } from '../store/schemas/product';

type Props = {
  categories: Category[],
  fetchCategories: Function,
};

class CategoryList extends React.Component<Props> {
  componentDidMount(){
    this.props.fetchCategories();
  }

  render() {
    return (
      <List
        items={this.props.categories}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  categories: state.products.categories,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchCategories: () => dispatch(actionCreators.products.fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);