import { convertDeezerData } from '../utils/convertDeezerData';
import { api } from './api';

type Episode = {
  id: string | number;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  link: string;
};

type SetEpisodes = (param: Episode[]) => void;

type GetDefaultSongs = (setEpisodes: SetEpisodes) => void;

export const getDefaultSongs: GetDefaultSongs = async (setEpisodes) => {
  const { data } = await api.get('/https://api.deezer.com/chart', {
    headers: {
      'x-requested-with': 'https://localhost:3000',
    },
  });
  const songs = convertDeezerData(data.tracks.data);
  setEpisodes(songs);
};
