import React from "react";
import * as GI from "../../global/interfaces";
import {Cells, Cell, Display} from './ui';

const ChartPercentCritFail: React.FC<GI.ChartSingleStack> = ({ stack }) => {
  const critCards = stack.filter((card) => card.effects.damageMod==='2x');
  const failCards = stack.filter((card) => card.effects.damageMod==='-');

  const getPercent = (cards:any[]) => {
    const rawPct = 100 *cards.length / stack.length;
    return rawPct.toFixed(2);
  };

  return (
    <Cells>
      <Cell first><Display damageMod="-">{getPercent(failCards)}%</Display></Cell>
      <Cell><Display damageMod="2x">{getPercent(critCards)}%</Display></Cell>
    </Cells>
  );
}
export default ChartPercentCritFail;