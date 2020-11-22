import React from "react";
import {lighten, rgba} from "polished";
import {cardLegend} from '../../theme';

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import {Stack} from "../Deck/declare/enums";
import * as GI from "../../global/interfaces";
import {flatten, groupBy} from 'lodash';


const ChartHistogram: React.FC<GI.GenericChart> = ({ stacks }) => {
  const cardsFlattened = flatten(stacks);

  // Adjust Values so that Curse and Bless do not have the same values as Null and Critical
  const getAdjustedVal = (card:any) => card.description==='Bless'
                                      ? card.value + 1
                                      : card.description==='Curse'
                                        ? card.value - 1
                                        : card.value;

  const cardsSorted = cardsFlattened.sort((a, b) => getAdjustedVal(a) - getAdjustedVal(b))
  const cardsGrouped = groupBy(cardsSorted, 'description');

  const labels:string[] = Object.keys(cardsGrouped);
  const maxCardCount:number = Math.max.apply(Math, labels.map((label) => cardsGrouped[label].length))

  const data = labels.map((label) => ({
    name: label,
    value: stacks[Stack.READY].filter((cardItem) => cardItem.description===label).length
  }))

  const UIColor = '#aaa';

  const baseFontSize = 10;
  const tickFontSize = baseFontSize*1.2;
  const tickProps = {
    fontSize: tickFontSize,
    fill: UIColor
  }
  const gridProps = {
    stroke: UIColor
  }



  return (
    <BarChart width={350} height={250} data={data}>
      <CartesianGrid {...{
        vertical: false,
        stroke: rgba(UIColor, 0.5),
        strokeDasharray: '1 4',
      }} />
      <Bar dataKey="value">
        {
          data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={cardLegend[entry.name]}/>
          ))
        }
      </Bar>
      <XAxis {...{
        angle: -45,
        axisLine: {stroke: UIColor},
        dataKey: "name",
        dy: 5,
        height: tickFontSize*3.5,
        textAnchor: "end",
        tick: tickProps,
        tickLine: false,
        ticks: labels,
        type: "category"
      }}/>
      <YAxis {...{
        axisLine: false,
        domain: [0, maxCardCount],
        tick: tickProps,
        tickCount: maxCardCount,
        tickLine: false,
        ticks: Array.from({length: maxCardCount}, (v, i) => i+1),
        width: tickFontSize

      }} />
    </BarChart>

  );
}
export default ChartHistogram;