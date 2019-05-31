import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TodoPage from './components/TodoPage';

import './App.css';

class App extends PureComponent {
  render() {
    return (
      <Router>
      <div className="container">
        <Header />
        <Route path="/todo-page" component={TodoPage} />
        <Route path="/home-page" component={HomePage} />
      </div>
      </Router>
    );
  }
}
export default App
