import React from "react";

export interface CardProps {
  id: string;
  name: string;
  isFlipped?: boolean;
  stack?: number;
  idx?: number;
}

export interface CardPropsUI {
  isFlipped?:boolean,
  stack?:number,
  idx?:number,
};
export interface CardFrontPropsUI {
  name: string;
  stack: number;
}


export interface ButtonProps {
  children: React.ReactNode;
  callBack: (e:Event) => (void);
}
export interface ButtonPropsUI {
  onClick: any;
}

