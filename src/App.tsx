import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/Homepage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SearchCakesPage } from './layouts/SearchCakesPage/SearchCakesPage';
export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100 main-bg'>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        <div className='flex-grow-1'>
          <Switch>
            <Route path={'/'} exact>
              <Redirect to='/home' />
            </Route>
            <Route path={'/home'}>
              <HomePage />
            </Route>
            <Route path={'/search'}>
              <SearchCakesPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

