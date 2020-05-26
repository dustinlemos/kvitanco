import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { openOrder, closeOrder, refundOrder } from '../../actions'
import './OrderList.css';

class OrderList extends Component {
  handleRowClick = (e, id) => {
    if (e.target.localName === "td") {
      this.props.history.push(`/order/${id}`);
    }
  }
  checkFilter = (order) => {
    const filter = this.props.filter;
    if (filter.status) {
      if ((filter.status === "open" && !order.open) || 
        (filter.status === "closed" && order.open )) {
        return true;
      }
    }
    if (filter.payment) {
      if ((filter.payment === "paid" && !order.paid) ||
        (filter.payment === "unpaid" && order.paid)) {
          return true
        }
    } 
    return false;
  }

  render() {
    const { orders, refundOrder, closeOrder, openOrder } = this.props;
    const orderList = orders.length ? orders.map(order => {
      const paidColorClass = order.paid ? "uk-text-success" : "uk-text-danger";
      const toggleOrderText = order.open ? "Close Order" : "Open Order";
      const refundButton = !order.refunded ? <li><Link onClick={() => refundOrder(order.id)}>Issue Refund</Link></li> : null;
      return this.checkFilter(order) ? null : (
        <tr onClick={(e) => this.handleRowClick(e, order.id)} className="order" key={ order.id }>
          <td>{ order.id }</td>
          <td>{ order.orderDate }</td>
          <td>{ order.amountDue } XMR</td>
          <td className={paidColorClass}>{ order.amountReceived } XMR</td>
          <td>{ order.itemsOrdered.toString() }</td>
          <td>
            <button className="uk-button uk-button-default uk-button-small uk-text-small uk-text-muted">action <span uk-icon="icon: triangle-down"></span></button>
            <div uk-dropdown="mode: click; pos: bottom-right">
              <ul className="uk-nav uk-dropdown-nav">
                { refundButton }
                <li><Link onClick={() => order.open ? closeOrder(order.id) : openOrder(order.id)}>{ toggleOrderText }</Link></li>
              </ul>
            </div>
          </td>
        </tr>
      );
    }) : null;
    
    return (
      <table className="order-list uk-table uk-table-small uk-table-divider uk-table-hover">
        <thead>
          <tr>
            <th className="uk-table-shrink">Order ID</th>
            <th>Date</th>
            <th>Amount Due</th>
            <th>Amount Received</th>
            <th className="uk-table-expand">Items Ordered</th>
            <th className="uk-table-shrink"></th>
          </tr>
        </thead>
        <tbody>
          { orderList }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openOrder: (id) => { dispatch(openOrder(id)) },
    closeOrder: (id) => { dispatch(closeOrder(id)) },
    refundOrder: (id) => { dispatch(refundOrder(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderList));
