import React, { useEffect, useRef, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { usePlayerContext } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import Image from '../Image';
import shuffle from '../../assets/shuffle.svg';
import playPrevious from '../../assets/play-previous.svg';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import playNextIMG from '../../assets/play-next.svg';
import repeat from '../../assets/repeat.svg';
import playing from '../../assets/playing.svg';
import { PlayerContainer } from './playerContainer';

type Episode = {
  id: string | number;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
};

export function Player() {
  const {
    currentEpisodeIndex,
    isPlaying,
    isShuffling,
    handlePlayNext,
    handPlayPrevious,
    togglePlayButton,
    togglePlayingState,
    toggleShuffleState,
    togglePlayerPosition,
    playingNow,
    // play
  } = usePlayerContext();

  const [episode, setEpisode] = useState(null as unknown as Episode);

  useEffect(() => {
    if (playingNow || currentEpisodeIndex) {
      const newEpisode: Episode = playingNow[currentEpisodeIndex];
      setEpisode(newEpisode);
    }
  }, [currentEpisodeIndex, playingNow]);

  const audioRef = useRef(null as HTMLAudioElement | any);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else if (!isPlaying) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const [progress, setProgress] = useState(0);
  const [progressInTimeString, setProgressInTimeString] = useState('00:00:00');

  function playNext() {
    if (currentEpisodeIndex + 1 >= playingNow.length && !isShuffling) {
      audioRef.current.pause();
    } else {
      handlePlayNext();
      setProgress(0);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  function setProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      if (!audioRef.current) {
        return;
      } else {
        const time = Math.floor(audioRef.current.currentTime);
        setProgress(time);
      }
    });
  }

  useEffect(() => {
    const timeString = convertDurationToTimeString(progress);
    setProgressInTimeString(timeString);
  }, [progress, progressInTimeString]);

  const [isReplaying, setIsReplaying] = useState(false);

  function toggleReplayState() {
    setIsReplaying(!isReplaying);
  }

  function handleSliderChange(amount: number) {
    if (!audioRef.current) {
      return;
    } else {
      audioRef.current.currentTime = amount;
      setProgress(amount);
    }
  }

  const [equalSize, setEqual] = useState(false);
  const [smallerSize, setSmallerSize] = useState(false);

  useEffect(() => {
    if (typeof currentEpisodeIndex === 'number') {
      const equal = currentEpisodeIndex === playingNow.length - 1;
      setEqual(equal);

      const smaller = currentEpisodeIndex - 1 < 0;
      setSmallerSize(smaller);
    }
  }, [currentEpisodeIndex, playingNow]);

  return (
    <PlayerContainer>
      <button className="hideButton" onClick={togglePlayerPosition}>
        {'Esconder >'}
      </button>
      <header>
        <img src={playing} alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className="currentEpisode">
          <Image episode={episode} />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className="emptyPlayer">
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode ? 'empty' : ''}>
        <div className="progress">
          <span>{progressInTimeString}</span>
          <div className="slider">
            {episode ? (
              <>
                <Slider
                  trackStyle={{ backgroundColor: 'var(--green-500)' }}
                  railStyle={{ backgroundColor: 'var(--purple-300)' }}
                  handleStyle={{
                    borderColor: 'var(--green-500)',
                    borderWidth: 4,
                  }}
                  max={episode.duration}
                  value={progress}
                  onChange={handleSliderChange}
                />

                <audio
                  ref={audioRef}
                  src={episode.url}
                  autoPlay
                  onPlay={() => togglePlayingState(true)}
                  onPause={() => togglePlayingState(false)}
                  onLoadedMetadata={setProgressListener}
                  loop={isReplaying}
                  onEnded={playNext}
                />
              </>
            ) : (
              <div className="emptySlider" />
            )}
          </div>
          <span>{episode ? episode.durationAsString : '00:00:00'}</span>
        </div>

        <div className="controls">
          <button
            type="button"
            disabled={!episode}
            className={isShuffling ? 'active' : ''}
            onClick={toggleShuffleState}
          >
            <img src={shuffle} alt="Embaralhar" />
          </button>
          <button
            type="button"
            style={smallerSize && !isShuffling ? { opacity: 0.5 } : {}}
            disabled={(!episode || smallerSize) && !isShuffling}
            onClick={() => handPlayPrevious()}
          >
            <img src={playPrevious} alt="Tocar anterior" />
          </button>
          {isPlaying ? (
            <button
              type="button"
              className="play"
              disabled={!episode}
              onClick={() => togglePlayButton()}
            >
              <img src={pause} alt="Pausar" />
            </button>
          ) : (
            <button
              type="button"
              className="play"
              disabled={!episode}
              onClick={() => togglePlayButton()}
            >
              <img src={play} alt="Tocar" />
            </button>
          )}
          <button
            type="button"
            style={equalSize && !isShuffling ? { opacity: 0.5 } : {}}
            disabled={(!episode || equalSize) && !isShuffling}
            onClick={() => handlePlayNext()}
          >
            <img src={playNextIMG} alt="Tocar próxima" />
          </button>
          <button
            type="button"
            disabled={!episode}
            className={isReplaying ? 'active' : ''}
            onClick={toggleReplayState}
          >
            <img src={repeat} alt="Repetir" />
          </button>
        </div>
      </footer>
    </PlayerContainer>
  );
}
