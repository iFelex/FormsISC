import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Forms from './forms.jsx';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/forms" />
      </Route>
      <Route path="/forms" component={Forms} />
    </Router>
  );
}

export default App;


