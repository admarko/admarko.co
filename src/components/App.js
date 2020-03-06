import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./__styles__/App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import Note from "./Note";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/notes/:slug" render={Note} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
