import React, { useState } from 'react';

import Profile from './components/Profile/Profile.js';
import './App.css';
import Links from './components/Links/Links.js';
import Form from './components/Form/Form.js';
// import styles from './App.module.css';


const App =() => {
  return (
    <React.Fragment>
      <header>
        <Profile />
      </header>

      <main>
        <Links />
      </main>

      <footer>
        <Form />
      </footer>
    </React.Fragment>
  );
}

export default App;