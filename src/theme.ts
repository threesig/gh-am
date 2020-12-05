import {darken} from 'polished';
export const paletteCards:any = {
  '-': '#de425b',
  '-2': '#e98087',
  '-1': '#edb5b6',
  '0': '#e8e8e8',
  '1': '#a8c8bd',
  '2': '#67a793',
  '2x': '#488f31',
}

const colorModVal = 0.1;
export const cardLegend:any = {
  'Curse': darken(colorModVal, paletteCards['-']),
  'Null': paletteCards['-'],
  '-2': paletteCards['-2'],
  '-1': paletteCards['-1'],
  '+0': paletteCards['0'],
  '+1': paletteCards['1'],
  '+2': paletteCards['2'],
  'Critical': paletteCards['2x'],
  'Bless': darken(colorModVal, paletteCards['2x']),
}
export const effectIcons:any = {
  Fire: "🔥",
  Ice: "❄️",
  Earth: "🍃",
  Wind: "💨",
  Light: "☀️",
  Darkness: "🌑",
  Stun: "💫",
  Wound: "🩸",
  Immobilize: "🗿",
  Curse: "💀",
  Bless: "✨",
  Rolling: "⟳",
}