import React from "react";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import {Stack} from "../Deck/declare/enums";
import * as I from "./declare/interfaces";
import {flatten, groupBy} from 'lodash';


const ChartHistogram: React.FC<I.ChartHistogram> = ({ stacksContent}) => {
  const labels:string[] = Object.keys(groupBy(flatten(stacksContent), 'description'));
  const data = labels.map((label) => ({
    name: label,
    value: stacksContent[Stack.READY].filter((cardItem) => cardItem.description===label).length
  }))




  console.table(data);

  const baseFontSize = 10;

  const tickProps = {
    fontSize: 10
  }
  return (
    <BarChart width={300} height={150} data={data}>
      <Bar dataKey="value" fill="#8884d8" />
      <XAxis
        angle={-45}
        dataKey="name"
        dy={5}
        textAnchor="end"
        tick={tickProps}
        type="category"
      />
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