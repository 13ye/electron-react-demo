import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
//import icon from '../../assets/icon.svg';
import './App.global.css';

const Index = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
      }}
    >
      <iframe
        style={{ width: '100%', height: '100%' }}
        src="http://bing.com"
        title={'nice 13ye'}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
}
