import React, {Component} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Venues from "./pages/venues/Venues";

import "./App.css";
import Artists from "./pages/artists/Artists";

var firebaseConfig = {
    apiKey: "AIzaSyAPThA_o-fCWAFWbTKmxAgxLwIOUrV3XDg",
    authDomain: "ranky-b627b.firebaseapp.com",
    databaseURL: "https://ranky-b627b.firebaseio.com",
    projectId: "ranky-b627b",
    storageBucket: "ranky-b627b.appspot.com",
    messagingSenderId: "102594017401",
    appId: "1:102594017401:web:a1c2eff7534c90b9"
};

firebase.initializeApp(firebaseConfig)


class App extends Component{

    render() {

        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/venues" component={Venues} />
                <Route path="/artists" component={Artists} />
            </Router>
        );
    }
}

export default App;
