import React from "react";
// @ts-ignore
import Odometer from 'react-odometerjs';
import {Display, OdometerWrap} from './ui';

interface IChartPercentDisplay {
  value: number;
  color: string;
}

const ChartPercentDisplay: React.FC<IChartPercentDisplay> = ({ value, color }) => {
  const percentage = parseFloat(`${(100*value).toFixed(2)}1`);
  return (
      <Display speed={1000} color={color}>
        <OdometerWrap><Odometer value={percentage} format="(,ddd).ddd" /></OdometerWrap>%
      </Display>
  );
}
export default ChartPercentDisplay;