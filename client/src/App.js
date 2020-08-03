import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"

import PushUps from "./pages/PushUps";
import Login from "./pages/Login"
import Home from "./pages/Home"
import CreateAccount from "./pages/CreateAccount"
import Challengefriends from "./pages/ChallengeFriends"
import GlobalChallenge from "./pages/GlobalChallenge"
import LocalChallenge from "./pages/LocalChallenge"
import SoloChallenge from "./pages/SoloChallenge"
import TestAuth from "./pages/TestAuth"
import TestSignup from "./pages/TestSignup"
import AuthSuccess from "./pages/AuthSuccess"
import Logout from "./pages/Logout"

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          < NavBar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/CreateAccount" component={CreateAccount} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Challengefriends" component={Challengefriends} />
            <Route exact path="/GlobalChallenge" component={GlobalChallenge} />
            <Route exact path="/LocalChallenge" component={LocalChallenge} />
            <Route exact path="/SoloChallenge" component={SoloChallenge} />
            <Route exact path="/PushUps" component={PushUps} />
            <Route exact path="/TestAuth" component={TestAuth} />
            <Route exact path="/TestSignup" component={TestSignup} />
            <Route exact path="/AuthSuccess" component={AuthSuccess} />
            <Route exact path="/Logout" component={Logout} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </Provider>

  );
}

export default App;
