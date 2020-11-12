import React, {useContext} from "react";
import DeckContext from "../../contexts/DeckContext";
import * as UI from "./ui";
import ButtonDraw from "../ButtonDraw";
import ButtonShuffle from "../ButtonShuffle";
import ButtonAdvantage from "../ButtonAdvantage";
import ButtonDisadvantage from "../ButtonDisadvantage";

const ControlPanel = () => {
  return (
    <UI.Panel>
      <UI.PanelItem>
        <ButtonDraw />
      </UI.PanelItem>
      <UI.PanelItem>
        <ButtonShuffle />
      </UI.PanelItem>
      <UI.PanelItem>
        <ButtonAdvantage />
      </UI.PanelItem>
      <UI.PanelItem>
        <ButtonDisadvantage />
      </UI.PanelItem>
    </UI.Panel>
  );
}
export default ControlPanel;