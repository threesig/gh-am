import React from "react";
import {lighten, rgba} from "polished";
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

import {Stack} from "../Deck/declare/enums";
import * as GI from "../../global/interfaces";
import {flatten, groupBy} from 'lodash';


const ChartDrawProbability: React.FC<GI.GenericChart> = ({ stacks }) => {
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

  console.log(labels);
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
      <PieChart width={350} height={350}>
        <Pie data={data} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
      </PieChart>
  );
}
export default ChartDrawProbability;

/*
import React, { PureComponent } from 'react';

const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
        <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      </PieChart>
    );
  }
}
*/