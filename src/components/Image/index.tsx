type Episode = {
  id: string | number;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
};

type ImageProps = {
  episode: Episode;
  width?: number;
  height?: number;
  borderRadius?: number;
};

// const ImageContainer = styled.div`
//   img {
//     width: ${imageWidth ? imageWidth + 'px' : '100%'};
//     height: ${heightImage ? heightImage + 'px' : '100%'};
//     max-height: 20rem;
//     border-radius: 1.25rem;
//   }
// `;

export default function Image({
  episode,
  width,
  height,
  borderRadius,
}: ImageProps) {
  return (
    <img
      style={{
        width: `${width ? width + 'px' : '100%'}`,
        height: '100%',
        maxHeight: '20rem',
        borderRadius: `${borderRadius ? borderRadius + 'rem' : '1.25rem'}`,
      }}
      src={episode.thumbnail}
      alt={episode.title}
    />
  );
}
