import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';
import { BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">

      <Router basename='ITBootcamp-zavrsni-rad'>
        <Header user={user} setUser={setUser} />

        <Content setUser={setUser} loggedin={user} user={user} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
