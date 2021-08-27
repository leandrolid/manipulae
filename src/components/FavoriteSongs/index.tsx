import { Link } from 'react-router-dom';
import { usePlayerContext } from '../../contexts/PlayerContext';

import { FavoriteSongsContainer } from './favoriteSongsContainer';
import playGreen from '../../assets/play-green.svg';
import Image from '../Image';

export function FavoriteSongs() {
  const {
    play,
    togglePlayerPositionDefault,
    favoriteSongs,
    handleRemoveFavorite,
  } = usePlayerContext();

  return (
    <FavoriteSongsContainer>
      {/* <h2>Últimos Lançamentos</h2> */}
      <ul>
        {favoriteSongs.map((episode, index) => {
          return (
            <li key={episode.id}>
              <Image width={200} episode={episode} />
              <div className="details">
                <Link to={episode.link} target="_blank">
                  {episode.title}
                </Link>
                <p>{episode.members}</p>
                <span>{episode.durationAsString}</span>
              </div>

              <button
                className="close"
                onClick={() => handleRemoveFavorite(index)}
              >
                X
              </button>

              <button
                type="button"
                onClick={() => {
                  play(favoriteSongs, index);
                  togglePlayerPositionDefault();
                }}
              >
                <img src={playGreen} alt="Tocar episódio" />
              </button>
            </li>
          );
        })}
      </ul>
    </FavoriteSongsContainer>
  );
}
