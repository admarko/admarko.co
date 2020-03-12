import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Notes from './Notes';
import Note from './Note';
import About from './About';
import Work from './Work';

import './__styles__/App.scss';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/notes/:slug" render={Note} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
