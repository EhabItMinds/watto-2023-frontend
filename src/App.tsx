import React from 'react';
import { Header } from './components/header';
import { Button } from './components/button';
import { graphql } from './gql';
import { useQuery } from '@apollo/client';
import { Login } from './views/Login';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header> Welcome </Header>
      <Link to={'/login'}>
        <Button> Login </Button>
      </Link>
    </div>
  );
}
export default App;
