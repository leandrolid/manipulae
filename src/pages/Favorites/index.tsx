import { Link } from 'react-router-dom';
import { usePlayerContext } from '../../contexts/PlayerContext';

// import styles from './favorites.module.scss';
import { FavoriteSongs } from '../../components/FavoriteSongs';
import { FavoritesContainer, FavoritesMain } from './favoritesContainer';

import favoritesBG from '../../assets/favorites-bg.jpg';
import playIcon from '../../assets/play.svg';
import arrowLeft from '../../assets/arrow-left.svg';

export default function Favorites() {
  const { play, favoriteSongs } = usePlayerContext();

  return (
    <FavoritesMain>
      <FavoritesContainer>
        <div className="thumbnail">
          <Link to="/" className="back">
            <button type="button" className="button back">
              <img src={arrowLeft} alt="Voltar" />
            </button>
          </Link>

          <img height={170} width={700} src={favoritesBG} alt="Favoritos" />

          <button
            type="button"
            className="button play"
            onClick={() => play(favoriteSongs, 0)}
          >
            <img src={playIcon} alt="Tocar favoritos" />
          </button>
        </div>
        {favoriteSongs.length > 0 ? (
          <FavoriteSongs />
        ) : (
          <div className="empty">
            <h3>Parece que você ainda não tem nenhum favorito.</h3>
            <h4>Busque por músicas que você gosta e salve elas aqui!</h4>
          </div>
        )}
      </FavoritesContainer>
    </FavoritesMain>
  );
}
