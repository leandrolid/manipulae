import React from 'react';
import { Link } from 'react-router-dom';
import { usePlayerContext } from '../../contexts/PlayerContext';

import styles from './latestEpisodes.module.scss';

type Episode = {
  id: string,      
  title: string,
  thumbnail: string,
  members:string,
  publishedAt: string,
  duration: number
  durationAsString: string,
  url: string,
}

type LatestEpisodesProps = {
  data: [ Episode[], Episode[]] 
}; 

export function LatestEpisodes({data}: LatestEpisodesProps) {
  const { play, togglePlayerPositionDefault } = usePlayerContext();
  const [ latestEpisodes, allEpisodes ] = data;

  return(
    <section className={styles.container}>
      <h2>Últimos Lançamentos</h2>
      <ul>
        {latestEpisodes.map((episode, index) => {          
          return (
            <li key={episode.id}>
              <img
              width={192}
              height={192}
              src={episode.thumbnail}
              alt={episode.title}
              />
              <div className={styles.details}>
                <Link to={`/episodes/${episode.id}`}>
                  {episode.title}
                </Link>
                <p>{episode.members}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </div>

              <button type="button" onClick={() => {
                play([], index);
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