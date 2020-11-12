import React, {useContext} from "react";
import Button from '../Button'
import DeckContext from "../../contexts/DeckContext";
import * as E from "../../global/enums";

const ButtonDisadvantage = () => {
  const {drawMod, setDisadvantage, unsetDrawMods, shuffleUrgency} = useContext(DeckContext);
  const callback = drawMod===E.DrawMod.DISADVANTAGE ? unsetDrawMods : setDisadvantage;


  const buttonProps = {
    callback,
    isEnabled: shuffleUrgency===0,
    volume: drawMod===E.DrawMod.DISADVANTAGE ? 1 : 0
  };


  return <Button {...buttonProps}>Muddle</Button>
}
export default ButtonDisadvantage;