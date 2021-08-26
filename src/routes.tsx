import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import styles from './styles/app.module.scss';
import { Header } from './components/Header';
import { Player } from './components/Player';

function Routes() {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </main>
      <Player />
      <GlobalStyles />
    </div>
  );
}

export default Routes;
