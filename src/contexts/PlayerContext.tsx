import axios from 'axios';
import { createContext, ReactNode, useContext, useState, FormEvent } from 'react';

type PlayerProviderProps = {
  children: ReactNode,
}

type Episode = {
  id: string | number,      
  title: string,
  thumbnail: string,
  members:string,
  duration: number
  durationAsString: string,
  url: string,
  link: string
}

type PlayserContextData = {
  episodes: Episode[],
  currentEpisodeIndex: number,
  isPlaying: boolean,
  isShuffling: boolean,
  playerPosition: string,
  search: string,
  favoriteSongs: Episode[],
  playingNow: Episode[],
  play: (episodeList: Episode[], index: number) => void,
  handlePlayNext: () => void,
  handPlayPrevious: () => void,
  togglePlayButton: () => void,
  togglePlayingState: (value: boolean) => void,
  toggleShuffleState: () => void,
  togglePlayerPosition: () => void,
  togglePlayerPositionDefault: () => void,
  setEpisodes: (param: Episode[]) => void,
  setCurrentEpisodeIndex: (param: number) => void,
  handleFavoriteSong: (param: Episode) => void,
  setSearch: (param: string) => void, 
  setPlayingNow: (param: Episode[]) => void,
  getInitialSongs: () => void,
  handleRemoveFavorite: (param: number) => void,
  searchSongs: (event: FormEvent, search: string) => void,
}

export const PlayerContext = createContext({} as PlayserContextData);

export function PlayerContextProvider({ children }: PlayerProviderProps) {
  const [ episodes, setEpisodes ] = useState([] as Episode[]);
  const [ currentEpisodeIndex, setCurrentEpisodeIndex ] = useState(-1);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ isShuffling, setIsShuffling ] = useState(false);
  const [ playerPosition, setPlayerPosition ] = useState('100vw');
  
  const [playingNow, setPlayingNow] = useState([] as Episode[]);

  function play(episodeList: Episode[], index: number) {
    setPlayingNow(episodeList);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlayerPosition() {
    setPlayerPosition('100vw');
  }
  
  function togglePlayerPositionDefault() {
    setPlayerPosition('0');
  }

  function togglePlayButton() {
    setIsPlaying(!isPlaying);
  }
  
  function handlePlayNext() {
    if (isShuffling) {
      const index = Math.floor(Math.random() * ( episodes.length - 1 ));
      setCurrentEpisodeIndex(index);
    } else if (currentEpisodeIndex < (episodes.length -1) ) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    };
  }

  function handPlayPrevious() {
    if (isShuffling) {
      const index = Math.floor(Math.random() * ( episodes.length - 1 ));
      setCurrentEpisodeIndex(index);
    } else if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function togglePlayingState(value:boolean) {
    setIsPlaying(value);
  }


  function toggleShuffleState() {
    setIsShuffling(!isShuffling);
  }

  ////////////////////////////////////////////

  const [ search, setSearch ] = useState('');
  const [favoriteSongs, setFavoriteSongs] = useState([] as Episode[]);

  async function searchSongs(event: FormEvent, search: string) {
    event.preventDefault();
    
    if (search) {
      setSearch(search);
      setEpisodes([]);

      const { data } = await axios.get('/api/search', {
        params: {
          search
        }
      });
      setEpisodes(data.searchedSongs);
    }
  }
  
  function handleFavoriteSong(song: Episode) {
    const alreadyExists = favoriteSongs.find((favorite) => favorite.id === song.id);
    if (!alreadyExists) setFavoriteSongs([...favoriteSongs, song]);
  }

  async function getInitialSongs() {
    setSearch('');
    setEpisodes([]);
    const { data } = await axios.get('/api/default');
    setEpisodes(data.defaultSongs);
  }

  function handleRemoveFavorite(index: number) {
    favoriteSongs.splice(index, 1);
    setFavoriteSongs([...favoriteSongs]);
  }

  return <PlayerContext.Provider value={{
    episodes,
    currentEpisodeIndex,
    isPlaying,
    isShuffling,
    playerPosition,
    search,
    favoriteSongs,
    playingNow,
    play,
    handlePlayNext,
    handPlayPrevious,
    togglePlayButton,
    togglePlayingState,
    toggleShuffleState,
    togglePlayerPosition,
    togglePlayerPositionDefault,
    setEpisodes,
    setCurrentEpisodeIndex,
    handleFavoriteSong,
    setSearch,
    setPlayingNow,
    getInitialSongs,
    handleRemoveFavorite,
    searchSongs
  }}
  >
    {children}
  </PlayerContext.Provider>;

}

export const usePlayerContext = () => useContext(PlayerContext);
