import React, {useContext} from "react";
import Button from '../Button'
import DeckContext from "../../contexts/DeckContext";

const ButtonDraw = () => {
  const {draw} = useContext(DeckContext);
  const buttonProps = {callback: draw,}

  return <Button {...buttonProps}>Draw!</Button>
}
export default ButtonDraw;