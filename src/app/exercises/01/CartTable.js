'use client';
import React from 'react';

function CartTable({ items, handleDeleteItem }) {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>#</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="cart-row">
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                onClick={() => handleDeleteItem(item)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;
