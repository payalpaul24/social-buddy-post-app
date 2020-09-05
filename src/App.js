import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import PostDetails from './components/PostDetails/PostDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Error from './components/Error/Error';

function App() {
  return (
    // <div>
    //   <Header></Header>
    //   <PostDetails></PostDetails>
    // </div>
    <Router>
      <Switch>
        <Route path="/post">
          <PostDetails></PostDetails>
        </Route>
        
        <Route exact path="/">
        <Header></Header>
        <PostDetails></PostDetails>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
