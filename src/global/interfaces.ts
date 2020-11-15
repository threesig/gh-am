import React from "react";

/**
 *  Card
 */

export interface Card {
  id: string;
  name: string;
  isFlipped?: boolean;
  isHilited?: boolean;
  stack?: number;
  idx?: number;
}
export interface CardUI {
  isFlipped?:boolean,
  stack?:number,
  idx?:number,
};
export interface CardFrontUI {
  name: string;
  isHilited?: boolean;
  stack: number;
}


/**
 *  Button
 */

export interface Button {
  children: React.ReactNode;
  callback?: any;
  isEnabled?: boolean;
  volume?: number;
  colorScheme?: string;
}
export interface ButtonUI {
  onClick: any;
  disabled: boolean;
  volume: number;
  colorScheme: string;
}


/**
 *  Deck
 */

export interface DeckProps {
  cards: Card[];
}
