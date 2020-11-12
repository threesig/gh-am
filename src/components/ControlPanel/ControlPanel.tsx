import React, {useContext} from "react";
import DeckContext from "../../contexts/DeckContext";
import Button from "../Button";
import * as UI from "./ui";
import * as E from "../../global/enums";
import ButtonDraw from "../ButtonDraw";
import ButtonShuffle from "../ButtonShuffle";

const ControlPanel = () => {
  const {setAdvantage, setDisadvantage, unsetDrawMods, drawMod, shuffleUrgency} = useContext(DeckContext);

  const buttonProps = [
    {
      children: 'Strengthen',
      callback: drawMod===E.DrawMod.ADVANTAGE ? unsetDrawMods : setAdvantage,
      isHilited: drawMod===E.DrawMod.ADVANTAGE
    },
    {
      children: 'Muddle',
      callback: drawMod===E.DrawMod.DISADVANTAGE ? unsetDrawMods : setDisadvantage,
      isEnabled: shuffleUrgency===0,
      isHilited: drawMod===E.DrawMod.DISADVANTAGE
    },
  ];


  return (
    <UI.Panel>
      <UI.PanelItem>
        <ButtonDraw />
      </UI.PanelItem>
      <UI.PanelItem>
        <ButtonShuffle />
      </UI.PanelItem>
      {buttonProps.map((props) => (
        <UI.PanelItem key={`button-${props.children}`}>
          <Button {...props} />
        </UI.PanelItem>
      ))}
    </UI.Panel>
  );
}
export default ControlPanel;