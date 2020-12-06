import React , {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_vwAUb0FIgsh6fUx3aMGOe0s3")


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
//only runs when the app components loads
auth.onAuthStateChanged(authUser => {
console.log('THE USER IS >>> ',authUser);

if(authUser){
//the user just logged in 

dispatch ({
   type: 'SET_USER',
   user: authUser
})
}else{
//the user just logged out

dispatch ({
  type: 'SET_USER',
  user: null
})

}

})  
}, [] )
  return (
    <Router>

<div className="app">
 
     <Switch>
     <Route path="/login">
     <Login/>
      </Route>
       <Route path="/checkout">
       <Header />
     <Checkout />
      </Route>
      <Route path="/payment">
       <Header />
       <Elements stripe={promise} >
        <Payment/> 
       </Elements>
  
      </Route>
      <Route path="/">
      <Header />
     <Home />
      </Route>
     </Switch>
     
    </div>
    </Router>
  );
}

export default App;
