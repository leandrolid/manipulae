import { usePlayerContext } from '../../contexts/PlayerContext';
import { AllEpisodesContainer } from './allEpisodesContainer';

import playGreen from '../../assets/play-green.svg';
import heart from '../../assets/heart.svg';
import Image from '../Image';

export function AllEpisodes() {
  const {
    play,
    togglePlayerPositionDefault,
    episodes,
    favoriteSongs,
    handleFavoriteSong,
  } = usePlayerContext();

  return (
    <AllEpisodesContainer>
      <h2>Todos episódios</h2>

      <table cellSpacing={0}>
        <thead>
          <tr>
            <th className="image">Capa</th>
            <th className="title">Música</th>
            <th className="members" title="Integrantes">
              Cantor
            </th>
            <th className="duration">Duração</th>
            <th className="favorite">Fav</th>
            <th>Tocar</th>
          </tr>
        </thead>

        <tbody>
          {episodes.map((episode, index) => {
            return (
              <tr key={episode.id} className="details">
                <td className="image">
                  <Image
                    episode={episode}
                    width={20}
                    height={20}
                    borderRadius={0.5}
                  />
                </td>

                <td className="title">
                  <a
                    href={ episode.link ? episode.link : '/' }
                    rel="noreferrer"
                    target="_blank"
                    title={episode.title}
                  >
                    {episode.title}
                  </a>
                  <div className="mobileSinger">
                    { episode.members}
                  </div>
                </td>

                <td className="members" title={ episode.members }>
                  {episode.members}
                </td>

                <td className="duration">{episode.durationAsString}</td>

                <td className="favorite">
                  <button
                    type="button"
                    onClick={() => handleFavoriteSong(episode)}
                    className={
                      favoriteSongs.find(
                        (favorite) => favorite.id === episode.id
                      )
                        ? 'active'
                        : ''
                    }
                  >
                    <img src={heart} alt="Favoritar" />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      play(episodes, index);
                      togglePlayerPositionDefault();
                    }}
                  >
                    <img src={playGreen} alt="Tocar episódio" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </AllEpisodesContainer>
  );
}
