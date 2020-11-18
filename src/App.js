import React from 'react';
import { Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { LogPage, SearchPage } from './pages';
import { Footer } from './components';

const cards = [1, 2, 3, 4];

export default function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact>
        <LogPage cards={cards} />
      </Route>
      <Route path="/add" exact>
        <SearchPage />
      </Route>
      <Footer />
    </>
  );
}