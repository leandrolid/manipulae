import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PlayerContextProvider } from './contexts/PlayerContext';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <Routes />
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

