import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import Wrapper from "./components/Wrapper"
import Login from "./pages/Login"
import Home from "./pages/Home"
import CreateAccount from "./pages/CreateAccount"
import AddWorkout from "./pages/AddWorkout"
import FeedPage from "./pages/FeedPage"
import SoloChallenge from "./pages/SoloChallenge"
import Signup from "./pages/Signup"
import Logout from "./pages/Logout"
import Welcome from "./pages/Welcome/index";
import SearchProfiles from './pages/Profiles';
import UserInfo from "./pages/UserInfo";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faPlus, faCheck, faTrophy, faStopwatch, faUserFriends, faGlobe, faMapMarkerAlt, faSignOutAlt, faThumbsUp, faComment, faDumbbell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faPlus, faCheck, faTrophy, faStopwatch, faUserFriends, faGlobe, faMapMarkerAlt, faSignOutAlt, faThumbsUp, faComment, faDumbbell, faInfoCircle)





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
          <Wrapper>
            <Route exact path="/" component={Welcome} />
            <Route path="/Login" component={Login} />
            <Route exact path="/CreateAccount" component={CreateAccount} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/AddWorkout" component={AddWorkout} />
            <Route exact path="/FeedPage" component={FeedPage} />
            <Route exact path="/SoloChallenge" component={SoloChallenge} />
            <Route exact path="/SearchProfiles" component={SearchProfiles}/> 
            <Route exact path="/userInfo" component={UserInfo} />
            <Route path="/Signup" component={Signup} />
            <Route exact path="/Logout" component={Logout} />
          </Wrapper>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
