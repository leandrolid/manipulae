import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import GlobalStyles from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Player } from './components/Player';
import { Wrapper } from './styles/wrapper';

function Routes() {
  return (
    <Wrapper>
      <main>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </main>
      <Player />
      <GlobalStyles />
    </Wrapper>
  );
}

export default Routes;
