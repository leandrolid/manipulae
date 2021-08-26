import React from 'react';
import { Link } from 'react-router-dom';
import { usePlayerContext } from '../../contexts/PlayerContext';
import { AllEpisodesContainer } from './allEpisodesContainer';

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

type AllEpisodesProps = {
  data: Episode[],
}; 

export function AllEpisodes({data}: AllEpisodesProps) {
  const { play, togglePlayerPositionDefault } = usePlayerContext();  

  return(
    <AllEpisodesContainer>
      <h2>Todos episódios</h2>

      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>Capa</th>
            <th className="title">Podcast</th>
            <th className="members" title="Integrantes">Integrantes</th>
            <th>Data</th>
            <th className="duration">Duração</th>
            <th>Tocar</th>
          </tr>
        </thead>

        <tbody>
        {data.map((episode, index)=> {          
          return (
            <tr key={episode.id} className="details">

              <td className="image">
                <img
                width={120}
                height={120}
                src={episode.thumbnail}
                alt={episode.title}
                />
              </td>

              <td className="title">
                <Link to={`/episodes/${episode.id}`} title={episode.title}>
                  {episode.title}
                </Link>
              </td>

              <td className="members" title={episode.members}>
                {episode.members}
              </td>

              <td className="duration">
                {episode.durationAsString}
              </td>

              <td>
              <button type="button" onClick={() => { 
                play(data, index);
                togglePlayerPositionDefault();
              }}>
                <img src="/play-green.svg" alt="Tocar episódio" />
              </button>
              </td>

            </tr>
          );})}

        </tbody>
        
      </table>
    </AllEpisodesContainer>
  );
}