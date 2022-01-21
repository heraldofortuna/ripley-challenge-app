import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import CreateClient from "./pages/CreateClient";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/create" element={<CreateClient />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
};

export default App;
