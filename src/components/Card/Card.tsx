import React, {useState} from 'react';
import * as UI from './ui';

interface ICardProps {
  name: string,
  value: number,
  isFlipped?: boolean
  stack?: number
  idx?: number
}

const Card: React.FC<ICardProps> = ({name, value=0, isFlipped = false, stack = 0, idx = 0}) => {
  const [flipState, setFlipState] = useState(isFlipped);
  console.log(`Is Flipped? ${flipState}`);
  
  const cardProps = {
    isFlipped: flipState,
    stack,
    idx,
    onClick: () => {
      setFlipState(!flipState)
    }
  }
  
  return (
    <UI.Card className="Card" {...cardProps}>
      <UI.Front className="Front" {...{name}} />
      <UI.Back className="Back" />
    </UI.Card>
  );
}

export default Card;
