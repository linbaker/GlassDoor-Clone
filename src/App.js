import React from 'react';
import logo from './logo.svg';
import './App.css';
import FrontPage from './FrontPage';
import EmployerPage from './EmployerPage';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import JobList from './JobList';

function App() {
  return (
    <div className="App">
      <Header/>
    <Switch>
    <Route exact path='/' component={FrontPage} />
    <Route path='/employers' component={EmployerPage} />
    <Route path='/findjobs' component={JobList} />
    <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
