import React, {useContext} from "react";
import DeckContext from "../../contexts/DeckContext";
import Button from "../Button";
import * as UI from "./ui";
import * as T from "../../global/types";
import {DrawMod} from "../../global/enums";

const ControlPanel = () => {
  const {draw, shuffle, setAdvantage, setDisadvantage, unsetDrawMods, drawMod, shuffleUrgency} = useContext(DeckContext);

  const buttonProps = [
    {children: 'Draw!', callback:draw},
    {children: 'Shuffle', callback: shuffle, isHilited: shuffleUrgency>0},
    {
      children: 'Strengthen',
      callback: drawMod===DrawMod.ADVANTAGE ? unsetDrawMods : setAdvantage,
      isHilited: drawMod===DrawMod.ADVANTAGE
    },
    {
      children: 'Muddle',
      callback: drawMod===DrawMod.DISADVANTAGE ? unsetDrawMods : setDisadvantage,
      isEnabled: shuffleUrgency===0,
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