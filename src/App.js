import React from 'react';
import { Route } from 'react-router-dom';

import { LogPage, SearchPage } from './pages';
import { Footer, SignUp, NavBar } from './components';

const cards = [1, 2, 3, 4];

export default function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact>
        <LogPage cards={cards} />
      </Route>
      <Route path="/search" exact>
        <SearchPage />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Footer />
    </>
  );
}