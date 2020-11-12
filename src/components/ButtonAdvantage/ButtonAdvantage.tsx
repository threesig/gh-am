import React, {useContext} from "react";
import Button from '../Button'
import DeckContext from "../../contexts/DeckContext";
import * as E from "../../global/enums";

const ButtonAdvantage = () => {
  const {drawMod, setAdvantage, unsetDrawMods} = useContext(DeckContext);

  const buttonProps = {
    callback: drawMod===E.DrawMod.ADVANTAGE ? unsetDrawMods : setAdvantage,
    volume: drawMod===E.DrawMod.ADVANTAGE ? 1 : 0,
    colorScheme: 'advantage'
  }
  return <Button {...buttonProps}>Strengthen</Button>
}
export default ButtonAdvantage;