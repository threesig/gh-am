import React, {useContext} from "react";
import DeckContext from "../../contexts/DeckContext";
import Button from "../Button";
import * as UI from "./ui";
import * as T from "../../global/types";
import {DrawMod} from "../../global/enums";

const ControlPanel = () => {
  const {draw, shuffle, setAdvantage, setDisadvantage, unsetDrawMods, drawMod, shuffleRequired} = useContext(DeckContext);

  const buttonProps = [
    {children: 'Draw!', callback:draw, isEnabled: !shuffleRequired},
    {children: 'Shuffle', callback: shuffle},
    {
      children: 'Strengthen',
      callback: drawMod===DrawMod.ADVANTAGE ? unsetDrawMods : setAdvantage,
      isEnabled: !shuffleRequired,
      isHilited: drawMod===DrawMod.ADVANTAGE
    },
    {
      children: 'Muddle',
      callback: drawMod===DrawMod.DISADVANTAGE ? unsetDrawMods : setDisadvantage,
      isEnabled: !shuffleRequired,
      isHilited: drawMod===DrawMod.DISADVANTAGE
    },
  ];


  return (
    <UI.Panel>
      {buttonProps.map((props) => (
        <UI.PanelItem key={`button-${props.children}`}>
          <Button {...props} />
        </UI.PanelItem>
      ))}
    </UI.Panel>
  );
}
export default ControlPanel;