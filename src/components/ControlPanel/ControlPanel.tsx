import React, {useContext} from "react";
import * as UI from "./ui";
import ButtonDraw from "../ButtonDraw";
import ButtonShuffle from "../ButtonShuffle";
import ButtonAdvantage from "../ButtonAdvantage";
import ButtonDisadvantage from "../ButtonDisadvantage";

const ControlPanel = () => {
  return (
    <UI.Panel data-testid="controlPanel">
      <UI.PanelItem data-testid="panelItem-draw">
        <ButtonDraw />
      </UI.PanelItem>
      <UI.PanelItem data-testid="panelItem-shuffle">
        <ButtonShuffle />
      </UI.PanelItem>
      <UI.PanelItem data-testid="panelItem-advantage">
        <ButtonAdvantage />
      </UI.PanelItem>
      <UI.PanelItem data-testid="panelItem-disadvantage">
        <ButtonDisadvantage />
      </UI.PanelItem>
    </UI.Panel>
  );
}
export default ControlPanel;