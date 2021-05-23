import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} exact />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
