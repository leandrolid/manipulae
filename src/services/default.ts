import axios from 'axios';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

type Album = {
  id: number,
  title: string,
  link: string,
  cover: string,
  cover_small: string,
  cover_medium: string,
  cover_big: string,
  cover_xl: string,
  md5_image: string,
  tracklist: string,
  type: string
}

type Artist = {
  id: number,
  name: string,
  link: string,
  picture: string,
  picture_small: string,
  picture_medium: string,
  picture_big: string,
  picture_xl: string,
  tracklist: string,
  type: string
}

type Track = {
  id: number,
  readable: boolean,
  title: string,
  title_short: string,
  title_version: string,
  link: string,
  duration: number,
  rank: number,
  explicit_lyrics: boolean,
  explicit_content_lyrics: number,
  explicit_content_cover: number,
  preview: string,
  md5_image: string,
  artist: Artist,
  album: Album,
  type: string
}

type ChartData = {
  tracks: {
    data: Track[]
  }
}

type APIResponse = {
  data: ChartData
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

type Response = {
  defaultSongs: Episode[]
}

export default async function defaultSongs() {
  const { data }: APIResponse = await axios.get('/chart');

  const defaultSongs = data.tracks.data.map((song) => ({
    id: song.id,
    title: song.title,
    thumbnail: song.album.cover_big,
    members: song.artist.name,
    duration: 29,
    durationAsString: convertDurationToTimeString(Number(song.duration)),
    url: song.preview,
    link: song.link
  }));
  
  return { defaultSongs } as Response;
}
