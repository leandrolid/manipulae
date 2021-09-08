import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AllEpisodes } from '../../components/AllEpisodes';
import { usePlayerContext } from '../../contexts/PlayerContext';
import { SearchBar } from '../../components/SearchBar';
import { HomeContainer } from './homeContainer';
// import HideButton from '../../components/HideButton';
import { Loading } from '../../components/LoadingItems';
import { getDefaultSongs } from '../../services/default';

export default function Home() {
  const { setEpisodes, search, episodes } = usePlayerContext();

  useEffect(() => {
    getDefaultSongs(setEpisodes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeContainer>
      <SearchBar />
      {/* <HideButton /> */}
      <div className="header">
        <h2>{search ? `Resultados para: ${search}` : 'Em alta'}</h2>
        <Link to="/favorites" className="favorites">
          Ver favoritos &#10084;
        </Link>
      </div>
      {episodes.length === 0 ? <Loading /> : <AllEpisodes />}
    </HomeContainer>
  );
}
