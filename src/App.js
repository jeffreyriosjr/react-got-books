import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouters';
import './App.css';


function App() {

  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App;
