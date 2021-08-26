import React from 'react';

import { LatestEpisodes } from '../../components/LatestEpisodes';
import { AllEpisodes } from '../../components/AllEpisodes';
import { usePlayerContext } from '../../contexts/PlayerContext';
import styles from "./home.module.scss";
import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const { togglePlayerPositionDefault, setEpisodes, episodes } = usePlayerContext();

  const allEpisodes = [{
    id: 'string',      
    title: 'string',
    thumbnail: 'string',
    members:'string',
    publishedAt: 'string',
    duration: 3600,
    durationAsString: 'string',
    url: 'string',
  }]

  const lastestEpisodes = [{
    id: 'string',      
    title: 'string',
    thumbnail: 'string',
    members:'string',
    publishedAt: 'string',
    duration: 3600,
    durationAsString: 'string',
    url: 'string',
  }]

  // const response = async () => await deezer.get('/', {
  //   params: {
  //     app_id: '497902',
  //     redirect_uri: 'http://localhost:3000',
  //   }
  // });

  // let data = response();

  // console.log(data);

  async function teste() {
    const { data } = await axios.get('/chart');
    console.log(data);
    
  }

  useEffect(() => {
    teste();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <head>
        <title>Devcastr</title>
        <meta name="description" content="Hear your favorite podcasts" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-png" />
      </head>
      
      <div className={styles.content}>
        <button
        className={styles.hideButton}
        onClick={() => togglePlayerPositionDefault()}
        title="Ver player"
        > 
          {'<'}
        </button>
        <LatestEpisodes data={[lastestEpisodes, allEpisodes]} />
        <AllEpisodes data={episodes} />
      </div>

    </>
  );
}
