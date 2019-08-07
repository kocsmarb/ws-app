import * as actionTypes from '../actions/action-types';
import * as Types from '../schemas';
import { enqueueSnackbar } from '../actions/snackbar';
import { getTotalPrice, validatePrice, addItemIfNotReachThePriceLimit } from './basket';

jest.mock('../../config/index', () => ({
  BASKET_PRICE_LIMIT: 20000,
  BASKET_ERROR_PRICE: 10000,
}));
jest.mock('../actions/snackbar');

const Product = jest.fn().mockImplementation((id, price) => ({
  id,
  price,
}));

const BasketItem = jest.fn().mockImplementation((product, quantity = 1) => ({
  product,
  quantity,
}));

describe('basketActions', () => {
  it('getTotalPrice', () => {
    const items = [
      new BasketItem(new Product(1, 2400), 2),
      new BasketItem(new Product(2, 4000), 5),
      new BasketItem(new Product(3, 300), 3),
    ];
    expect(getTotalPrice(items as any)).toEqual(25700);
  });

  it('validatePrice - error', () => {
    const p = new Product(1, 1000);
    expect(() => validatePrice(9000, p)).toThrow(Error);
  });

  it('validatePrice - silence', () => {
    const p = new Product(1, 1001);
    expect(() => validatePrice(10000, p)).not.toThrow(Error);
  });

  describe('addItemIfNotReachThePriceLimit', () => {
    it('over the limit', () => {
      const p = new Product(1, 500);
      addItemIfNotReachThePriceLimit(20000, p);
      expect(enqueueSnackbar).toHaveBeenCalledTimes(1);
    });
    it('under the limit', () => {
      const p = new Product(1, 1500);
      const action = addItemIfNotReachThePriceLimit(3000, p);
      expect(action.type).toBe(actionTypes.BASKET_ADD_ITEM);
    });
  });
});
