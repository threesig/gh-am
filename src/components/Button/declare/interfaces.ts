import React from "react";

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
