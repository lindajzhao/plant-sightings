import React from 'react';
import { Route } from 'react-router-dom';

import { LogPage, SearchPage, PlantDetailsPage } from './pages';
import { Footer, SignUp, NavBar } from './components';

export default function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact>
        <LogPage />
      </Route>
      <Route path="/search" exact>
        <SearchPage />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/pl/:slug" exact>
        <PlantDetailsPage />
      </Route>
      <Footer />
    </>
  );
}