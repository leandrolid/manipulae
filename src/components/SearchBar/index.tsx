import { useState } from 'react';
import { usePlayerContext } from '../../contexts/PlayerContext';
import styles from './searchBar.module.scss';

export function SearchBar() {
  const [input, setInput] = useState('');
  const { searchSongs } = usePlayerContext();

  return (
    <form
      className={styles.container}
      onSubmit={(event) => {
        searchSongs(event, input);
        setInput('');
    }}>
      <input
        type="text" name="search"
        value={input}
        required
        onChange={({ target }) => setInput(target.value)}
      />
      <button type="submit">
        Pesquisar
      </button>
    </form>
  );
}