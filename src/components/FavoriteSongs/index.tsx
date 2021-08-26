import { Link } from 'react-router-dom';
import { usePlayerContext } from '../../contexts/PlayerContext';

import styles from './latestEpisodes.module.scss';

export function FavoriteSongs() {
  const { play, togglePlayerPositionDefault, favoriteSongs, handleRemoveFavorite } = usePlayerContext();

  return(
    <section className={styles.container}>
      {/* <h2>Últimos Lançamentos</h2> */}
      <ul>
        {favoriteSongs.map((episode, index) => {          
          return (
            <li key={episode.id}>
              <img
              width={192}
              height={192}
              src={episode.thumbnail}
              alt={episode.title}
              />
              <div className={styles.details}>
                <Link to={episode.link} target="_blank">
                  {episode.title}
                </Link>
                <p>{episode.members}</p>
                <span>{episode.durationAsString}</span>
              </div>

              <button
                className={styles.close}
                onClick={()=>handleRemoveFavorite(index)}
              >
                X
              </button>

              <button type="button" onClick={() => {
                play(favoriteSongs, index);
                togglePlayerPositionDefault();
              }}>
                <img src="/play-green.svg" alt="Tocar episódio" />
              </button>
            </li>
          );})}
      </ul>
    </section>
  );
}