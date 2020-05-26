import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Orders from '../Orders/Orders';
import OrderDetail from '../OrderDetail/OrderDetail';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App uk-container">
        <h1 className="uk-heading-medium">Kvitanco</h1>
        <Switch>
          <Route exact path="/" component={Orders} />
          <Route path="/order/:order_id" component={OrderDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
