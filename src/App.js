import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const ShoesPage = () => (
  <div>
     <h1>
        SHOES PAGE
     </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/shoes' component={ShoesPage} />
      </Switch>
    </div>
  );
}

export default App;
