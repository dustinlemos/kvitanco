import React from 'react';
import OrderList from '../OrderList/OrderList.js';
import OrderFilter from '../OrderFilter/OrderFilter.js';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions'
import './Orders.css';

const Orders = ({ orders, filter, updateFilter }) => {
  return (
    <div className="orders uk-container">
      <OrderFilter updateFilter={updateFilter} />
      <OrderList orders={orders} filter={filter} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter) => { dispatch(updateFilter(filter)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
