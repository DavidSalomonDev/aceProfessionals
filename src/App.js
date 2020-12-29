import React ,{useEffect} from "react";
import "./styles/style.css"
import "./App.css";
import "./index.css";
import Aos from 'aos'
import "aos/dist/aos.css"
import { HomePage } from "./componants/Homepage";
function App() {

useEffect(() => {
  Aos.init({})

}, [])



  return (
    <div className="App">
    <HomePage/>
    </div>
  );
}

export default App;
