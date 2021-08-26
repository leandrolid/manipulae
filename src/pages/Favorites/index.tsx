import { usePlayerContext } from '../../contexts/PlayerContext';

import styles from './favorites.module.scss';
import { FavoriteSongs } from '../../components/FavoriteSongs';
import { Link } from 'react-router-dom';

export default function CurrentEpisode() {
  const { play, favoriteSongs } = usePlayerContext();

  return(
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.thumbnail}>
            <Link to="/">
              <button type="button">
                <img src="/arrow-left.svg" alt="Voltar" />
              </button>
            </Link>

            <img 
            width={700}
            height={160}
            src="/favorites-bg.jpg"
            alt="Favoritos"/>

            <button type="button" onClick={() => play(favoriteSongs, 0)}>
              <img src="/play.svg" alt="Tocar atual" />
            </button>
          </div>

          {favoriteSongs.length > 0
            ? <FavoriteSongs />
            : (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
              <h3>Parece que você ainda não tem nenhum favorito.</h3>
              <h4>Busque por músicas que você gosta e salve elas aqui!</h4>
            </div>
          ) }
        </div>
      </section>
    </>

  );
}
