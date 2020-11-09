import React from "react";

/**
 *  Card
 */

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


/**
 *  Button
 */

export interface ButtonProps {
  children: React.ReactNode;
  callBack: (e:Event) => (void);
  enabled?: boolean
}
export interface ButtonPropsUI {
  onClick: any;
  disabled: boolean;
}


/**
 *  Deck
 */

export interface DeckProps {
  cards: CardProps[];
}
