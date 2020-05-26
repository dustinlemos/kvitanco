import React from 'react';
import './OrderFilter.css';

const OrderFilter = ({updateFilter}) => {
  const handleChange = (e) => {
    updateFilter({[e.target.id]: e.target.value}); 
  }
  
  return (
    <div className="order-filter">
      <form>
        <label>Status</label>
        <select id="status" className="uk-select uk-form-width-small" onChange={handleChange}>
          <option value="false">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
        <label>Payment</label>
        <select id="payment" className="uk-select uk-form-width-small" onChange={handleChange}>
          <option value="false">All</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
      </form>
    </div>
  )
}

export default OrderFilter;
