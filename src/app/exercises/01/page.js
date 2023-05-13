'use client';
import React from 'react';

import DATA from './data';
import reducer from './reducer';
import StoreItem from './StoreItem';
import CheckoutFlow from './CheckoutFlow';
import './styles.css';

function ExerciseOne() {
  const [state, dispatch] = React.useReducer(
    reducer,
    null,
    () => {
      const savedItems =
        window.localStorage.getItem('cart-items');

      if (savedItems === null) {
        return [];
      }

      return JSON.parse(savedItems);
    }
  );

  React.useEffect(() => {
    window.localStorage.setItem(
      'cart-items',
      JSON.stringify(state)
    );
  }, [state]);

  return (
    <>
      <h1>Neighborhood Shop</h1>

      <main>
        <div className="items">
          {DATA.map((item) => (
            <StoreItem
              key={item.id}
              item={item}
              handleAddToCart={(item) => {
                dispatch({
                  type: 'add-item',
                  item,
                });
              }}
            />
          ))}
        </div>

        <CheckoutFlow
          items={state}
          taxRate={0.15}
          handleDeleteItem={(item) =>
            dispatch({
              type: 'delete-item',
              item,
            })
          }
        />
      </main>
    </>
  );
}

export default ExerciseOne;
