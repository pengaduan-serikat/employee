import React, { Fragment } from 'react';
import {
  StatusBar,
} from 'react-native';
import MainNavogator from './src/navigations/MainNavogator';

const App = () => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <MainNavogator />
  </Fragment>
);


export default App;
