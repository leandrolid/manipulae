import { convertDurationToTimeString } from './convertDurationToTimeString';

type Album = {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  tracklist: string;
  type: string;
};

type Artist = {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
};

type Songs = {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
};

export function convertDeezerData(data: Songs[]) {
  const songs = data.map((song: Songs) => ({
    id: song.id,
    title: song.title,
    thumbnail: song.album.cover_big,
    members: song.artist.name,
    duration: 29,
    durationAsString: convertDurationToTimeString(Number(song.duration)),
    url: song.preview,
    link: song.link,
  }));

  return songs;
}
