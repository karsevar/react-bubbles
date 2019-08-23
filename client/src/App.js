import React, { useState } from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
  );
}

export default App;
