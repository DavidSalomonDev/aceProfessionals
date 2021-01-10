import React, { useEffect } from "react";
import "./styles/style.css"
import "./App.css";
import "./index.css";
import Aos from 'aos'
import "aos/dist/aos.css"
import { HomePage } from "./componants/Homepage";
import { UserData } from "./componants/UserData";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {

  useEffect(() => {
    Aos.init({})

  }, [])



  return (

    <div className="App">
      
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/user" component={UserData} />


      </Router>
    </div>
  );
}

export default App;
