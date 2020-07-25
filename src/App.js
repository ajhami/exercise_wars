import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./pages/Test";
import Login from "./pages/Login"
import Home from "./pages/Home"
import CreateAccount from "./pages/CreateAccount"
import Challengefriends from "./pages/ChallengeFriends"
import GlobalChallenge from "./pages/GlobalChallenge"
import LocalChallenge from "./pages/LocalChallenge"
import SoloChallenge from "./pages/SoloChallenge"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <Router>
      <div>
        < NavBar />
        <Wrapper>
          <Route exact path="/" component={Test} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/CreateAccount" component={CreateAccount} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Challengefriends" component={Challengefriends} />
          <Route exact path="/GlobalChallenge" component={GlobalChallenge} />
          <Route exact path="/LocalChallenge" component={LocalChallenge} />
          <Route exact path="/SoloChallenge" component={SoloChallenge} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
