import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/pages";
import { Header } from "./components/blocks/Header";
import Progress from "./components/fabrics/Progress";
import Get from "./components/pages/get";
import Play from "./components/pages/play";
import PaymentMethods from "./components/pages/payment-methods";
import Ebout from "./components/pages/ebout";
import Telegram from "./components/pages/payments/telegram";

function App() {
  return (
    <div className="App">
      <Progress />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/get" component={Get} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/payment" component={PaymentMethods} />
          <Route path="/payment/telegram-bot" component={Telegram} />
          <Route exact path="/about" component={Ebout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
