import React from "react";
import {lighten, rgba} from "polished";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import {Stack} from "../Deck/declare/enums";
import * as I from "./declare/interfaces";
import {flatten, groupBy} from 'lodash';


const ChartHistogram: React.FC<I.ChartHistogram> = ({ stacksContent}) => {
  const cardsFlattened = flatten(stacksContent);

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
    value: stacksContent[Stack.READY].filter((cardItem) => cardItem.description===label).length
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
      <Bar dataKey="value" fill="#8884d8" />
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
        ticks: Array.from({length: maxCardCount}, (v, i) => i+1)
      }} />
    </BarChart>

  );
}
export default ChartHistogram;



/*

import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9kd8rssL/';

  render() {
    return (
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    );
  }
}

 */