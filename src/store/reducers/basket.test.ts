import * as actionTypes from '../actions/action-types';
import * as Types from '../schemas';
import basketReducer from './basket';

const Product = jest.fn().mockImplementation(id => ({
  id,
}));

describe('basketReducer', () => {
  it('add first item to an empty basket', () => {
    const item = new Product('a1');
    const resultBasket = {
      items: {
        a1: {
          product: item,
          quantity: 1,
        },
      },
      totalQuantity: 1,
    };

    expect(
      basketReducer(undefined, {
        type: actionTypes.BASKET_ADD_ITEM,
        item: item,
      }),
    ).toEqual(resultBasket);
  });

  it('add new item to a filled basket', () => {
    const a1 = new Product('a1');
    const a2 = new Product('a2');
    const initialState = {
      items: {
        a1: {
          product: a1,
          quantity: 2,
        },
      },
      totalQuantity: 2,
    };
    const resultBasket = {
      items: {
        a1: {
          product: a1,
          quantity: 2,
        },
        a2: {
          product: a2,
          quantity: 1,
        },
      },
      totalQuantity: 3,
    };

    expect(
      basketReducer(initialState, {
        type: actionTypes.BASKET_ADD_ITEM,
        item: a2,
      }),
    ).toEqual(resultBasket);
  });

  it('remove item from a basket', () => {
    const a1 = new Product(1);
    const a2 = new Product(2);
    const initialState = {
      items: {
        1: {
          product: a1,
          quantity: 2,
        },
        2: {
          product: a2,
          quantity: 1,
        },
      },
      totalQuantity: 3,
    };

    const resultState = {
      items: {
        1: {
          product: a1,
          quantity: 1,
        },
        2: {
          product: a2,
          quantity: 1,
        },
      },
      totalQuantity: 2,
    };

    expect(
      basketReducer(initialState, {
        type: actionTypes.BASKET_REMOVE_ITEM,
        id: 1,
      }),
    ).toEqual(resultState);
  });

  it('remove item (last-by-id) from a basket', () => {
    const a1 = new Product(1);
    const a2 = new Product(2);
    const initialState = {
      items: {
        1: {
          product: a1,
          quantity: 2,
        },
        2: {
          product: a2,
          quantity: 1,
        },
      },
      totalQuantity: 3,
    };

    const resultState = {
      items: {
        1: {
          product: a1,
          quantity: 2,
        },
      },
      totalQuantity: 2,
    };

    expect(
      basketReducer(initialState, {
        type: actionTypes.BASKET_REMOVE_ITEM,
        id: 2,
      }),
    ).toEqual(resultState);
  });

  it('reset basket', () => {
    const a1 = new Product(1);
    const a2 = new Product(2);
    const initialState = {
      items: {
        1: {
          product: a1,
          quantity: 2,
        },
        2: {
          product: a2,
          quantity: 1,
        },
      },
      totalQuantity: 3,
    };

    const resultState = {
      items: {},
      totalQuantity: 0,
    };

    expect(
      basketReducer(initialState, {
        type: actionTypes.BASKET_RESET,
      }),
    ).toEqual(resultState);
  });
});
