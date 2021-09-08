import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PlayerContextProvider } from './contexts/PlayerContext';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PlayerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

