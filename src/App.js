import React, { useState } from 'react';

import Profile from './components/Profile/Profile.js';
import Links from './components/Links/Links.js';
import Form from './components/Form/Form.js';
// import styles from './App.module.css';


const App =() => {
  return (
    <React.Fragment>
      <Profile />
      <Links />
      <Form />
    </React.Fragment>
  );
}

export default App;