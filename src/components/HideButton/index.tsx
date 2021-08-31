import styled from 'styled-components';
import { usePlayerContext } from '../../contexts/PlayerContext';

const HideButtonContainer = styled.button`
  display: none;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  vertical-align: middle;
  border-radius: 1rem;
  color: var(--white);
  background: var(--purple-400);

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

function HideButton() {
  const { togglePlayerPositionDefault } = usePlayerContext();
  return (
    <HideButtonContainer
      onClick={() => togglePlayerPositionDefault()}
      title="Ver player"
    >
      {'<'}
    </HideButtonContainer>
  );
}

export default HideButton;
