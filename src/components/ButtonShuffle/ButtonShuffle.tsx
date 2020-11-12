import React, {useContext} from "react";
import Button from '../Button'
import DeckContext from "../../contexts/DeckContext";

const ButtonShuffle = () => {
  const {shuffle, shuffleUrgency} = useContext(DeckContext);
  const buttonProps = {callback: shuffle, isHilited: shuffleUrgency>0}
  return <Button {...buttonProps}>Shuffle</Button>
}
export default ButtonShuffle;