import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import Wrapper from "./components/Wrapper"
import PushUps from "./pages/PushUps";
import Login from "./pages/Login"
import Home from "./pages/Home"
import CreateAccount from "./pages/CreateAccount"
import AddWorkout from "./pages/AddWorkout"
import Challengefriends from "./pages/ChallengeFriends"
import GlobalChallenge from "./pages/GlobalChallenge"
import LocalChallenge from "./pages/LocalChallenge"
import SoloChallenge from "./pages/SoloChallenge"
import Signup from "./pages/Signup"
import Logout from "./pages/Logout"
import Welcome from "./pages/Welcome/index";
import Squats from "./pages/Squats"
import SitUps from "./pages/SitUps"
import PullUps from "./pages/PullUps"
import SearchProfiles from './pages/Profiles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers,faPlus, faTrophy, faStopwatch, faUserFriends, faGlobe, faMapMarkerAlt, faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faPlus,faTrophy, faStopwatch, faUserFriends, faGlobe, faMapMarkerAlt, faThumbsUp, faComment)





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
          {/* The navbar and footers will now be attached to the specific pages */}
          {/* < NavBar /> */}
          <Wrapper>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/CreateAccount" component={CreateAccount} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/AddWorkout" component={AddWorkout} />
            <Route exact path="/Challengefriends" component={Challengefriends} />
            <Route exact path="/GlobalChallenge" component={GlobalChallenge} />
            <Route exact path="/LocalChallenge" component={LocalChallenge} />
            <Route exact path="/SoloChallenge" component={SoloChallenge} />
            <Route exact path="/PushUps" component={PushUps} />
            <Route exact path="/SearchProfiles" component={SearchProfiles}/> 

            <Route exact path="/Squats" component={Squats} />
            <Route exact path="/SitUps" component={SitUps} />
            <Route exact path="/PullUps" component={PullUps} />


            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Logout" component={Logout} />
          </Wrapper>
          {/* <Footer /> */}
        </div>
      </Router>
    </Provider>

  );
}

export default App;
