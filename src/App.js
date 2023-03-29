import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Bill from './components/Bill';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Restaurant} />
          <Route exact path="/menu1" component={Menu1} />
          <Route exact path="/menu2" component={Menu2} />
          <Route exact path="/menu3" component={Menu3} />
          <Route exact path="/bill" component={Bill} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




