import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './headerContainer';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR });

  return (
    <HeaderContainer>
      <Link to="/" >
        <div title="Devcast logo" />
      </Link>
      <p>O melhor para você ouvir. Sempre!</p>
      <span>{currentDate}</span>
    </HeaderContainer>
  );
}