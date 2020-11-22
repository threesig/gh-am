import React from "react";
import * as GI from "../../global/interfaces";
import {paletteCards} from "../../theme";
import {Cells, Cell, Display} from './ui';
import ChartPercentDisplay from "../ChartPercentDisplay";
const ChartPercentCritFail: React.FC<GI.ChartSingleStack> = ({ stack }) => {
  const critCards = stack.filter((card) => card.effects.damageMod==='2x');
  const failCards = stack.filter((card) => card.effects.damageMod==='-');

  const getPercent = (cards:any[]) => {
    const rawPct = 100 *cards.length / stack.length;
    return rawPct.toFixed(2);
  };

  return (
    <Cells>
      <Cell first><ChartPercentDisplay value={failCards.length/stack.length} color={paletteCards['-']} /></Cell>
      <Cell><ChartPercentDisplay value={critCards.length/stack.length} color={paletteCards['2x']} /></Cell>
    </Cells>
  );
}
export default ChartPercentCritFail;