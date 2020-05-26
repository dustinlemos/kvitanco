import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNote, openOrder, closeOrder, refundOrder } from '../../actions'
import './OrderDetail.css';

class OrderDetail extends Component {
  state = {
    note: "",
    open: this.props.order.open || null
  }

  handleChange = (e) => {
    this.setState({note: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNote(this.props.order.id, this.state.note);
    this.setState({note: ""});
  }
  toggleOrderStatus = () => {
    const { order } = this.props;
    if (order.open) {
      this.props.closeOrder(order.id);
    } else {
      this.props.openOrder(order.id);
    }
    this.setState({open: order.open})
  }
  handleRefundOrder = () => {
    this.props.refundOrder(this.props.order.id);
    this.setState({refunded: this.props.order.refunded})
  }

  render() {
    const { order } = this.props;
    const notes = order.notes.length ? (order.notes.map(note => <div key={note.index}>{note}</div>)) : null;
    const toggleOrderText = order.open ? "Close Order" : "Open Order";
    const refundButton = !order.refunded ? <button className="uk-button uk-button-secondary uk-button-small" onClick={this.handleRefundOrder}>Issue Refund</button> : null;
    const orderDetail = order ? (
      <div>
        <h2>Order #{ order.id }</h2>  
        <Link to="/" className="close-detail" uk-icon="icon: close; ratio: 2"></Link>
        <div className="uk-child-width-expand@s uk-grid" uk-grid="true">
          <div>
            <dl className="uk-description-list">
              <dt>Date</dt>
              <dd>{ order.orderDate }</dd>
            </dl>
            <dl className="uk-description-list">
              <dt>Items Ordered</dt>
              <dd>{ order.itemsOrdered }</dd>
            </dl>
            <dl className="uk-description-list">
              <dt>Amount Due</dt>
              <dd>{ order.amountDue } XMR</dd>
            </dl>
            <dl className="uk-description-list">
              <dt>Amount Received</dt>
              <dd>{ order.amountReceived } XMR ({ order.confirms } confirmations)</dd>
            </dl>
            <dl className="uk-description-list">
              <dt>Payment Address</dt>
              <dd>{ order.paymentAddress }</dd>
            </dl>
            <dl className="uk-description-list">
              <dt>Contact Email</dt>
              <dd>{ order.email }</dd>
            </dl>
          </div>
          <div>
            <dl className="uk-description-list">
              <dt>Notes</dt>
              <dd>{ notes }</dd>
            </dl>
            <form className="note-form" onSubmit={this.handleSubmit}>  
              <input className="uk-input uk-form-width-medium uk-form-small" onChange={this.handleChange} value={this.state.note} type="text" placeholder="Add a note" />
              <br />
              <button className="uk-button uk-button-default uk-button-small" type="submit">Add Note</button>
            </form>

            <p className="order-action-buttons uk-margin">
              { refundButton }
              <button className="uk-button uk-button-secondary uk-button-small" onClick={this.toggleOrderStatus}>{ toggleOrderText }</button>
              <Link to="/" className="uk-button uk-button-primary uk-button-small">Return</Link>
            </p>
          </div>
        </div>
      </div>
    ) : <h1>Order not found</h1>
    return (
      <div className="order-detail uk-container">
        <div className="uk-section uk-section-muted">
          { orderDetail }
        </div>
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  let order_id = ownProps.match.params.order_id;
  return {
    order: state.orders.find(order => order.id === order_id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openOrder: (id) => { dispatch(openOrder(id)) },
    closeOrder: (id) => { dispatch(closeOrder(id)) },
    refundOrder: (id) => { dispatch(refundOrder(id)) },
    addNote: (id, note) => { dispatch(addNote(id, note)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
