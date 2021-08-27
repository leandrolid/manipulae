import { useState } from 'react';
import { usePlayerContext } from '../../contexts/PlayerContext';
import { SearchBarContainer } from './searchBarContainer';

export function SearchBar() {
  const [input, setInput] = useState('');
  const { searchSongs } = usePlayerContext();

  return (
    <SearchBarContainer
      onSubmit={(event) => {
        searchSongs(event, input);
        setInput('');
      }}
    >
      <input
        type="text"
        name="search"
        value={input}
        required
        onChange={({ target }) => setInput(target.value)}
      />
      <button type="submit">Pesquisar</button>
    </SearchBarContainer>
  );
}
