import { useState } from "react";
import "./App.css";

import StartPage from "../src/pages/mobile-first/index";
import SucsessPage from "../src/pages/mobile-succsess/index"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Router>
        <Routes>
      <Route path="/home" Component={StartPage} />
      <Route path="/congratulations" Component={SucsessPage} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
