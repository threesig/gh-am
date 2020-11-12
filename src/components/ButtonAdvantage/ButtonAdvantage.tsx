import React, {useContext} from "react";
import Button from '../Button'
import DeckContext from "../../contexts/DeckContext";
import * as E from "../../global/enums";

const ButtonAdvantage = () => {
  const {drawMod, setAdvantage, unsetDrawMods} = useContext(DeckContext);
  const callback = drawMod===E.DrawMod.ADVANTAGE ? unsetDrawMods : setAdvantage;

  const buttonProps = {callback, isHilited: drawMod===E.DrawMod.ADVANTAGE}
  return <Button {...buttonProps}>Strengthen</Button>
}
export default ButtonAdvantage;