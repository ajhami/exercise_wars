import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./pages/Test";
import Login from "./pages/Login"

function App() {
  return (

    <Router>
      <Route exact path="/" component={Test} />
      <Route exact path="/login" component={Login} />
    </Router>

);
}

export default App;
