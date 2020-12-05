export const AMCards = [
  {
    type: "p0",
    name: "am-p-01",
    damageMod: 0,
    effects: [],
    description: "+0"
  },
  {
    type: "p1",
    name: "am-p-07",
    damageMod: 1,
    effects: [],
    description: "+1"
  },
  {
    type: "m1",
    name: "am-p-12",
    damageMod: -1,
    effects: [],
    description: "-1"
  },
  {
    type: "m2",
    name: "am-p-17",
    damageMod: -2,
    effects: [],
    description: "-2"
  },
  {
    type: "p2",
    name: "am-p-18",
    damageMod: 2,
    effects: [],
    description: "+2"
  },
  {
    type: "null",
    name: "am-p-19",
    damageMod: '-',
    effects: [],
    description: "Null",
    shuffle: true
  },
  {
    type: "crit",
    name: "am-p-20",
    damageMod: "2x",
    effects: [],
    description: "Critical",
    shuffle: true
  },
  {
    type: "bless",
    name: "am-pm-01",
    damageMod: "2x",
    effects: [],
    description: "Bless",
    temporary: true,
  },
  {
    type: "curse",
    name: "am-pm-21",
    damageMod: '-',
    effects: [],
    description: "Curse",
    temporary: true
  },
  {
    type: "p0-stun",
    name: "am-sw-07",
    damageMod: 0,
    effects: [
      {type: 'condition', value: "Stun"},
    ],
    description: "+0 Stun"
  },
  {
    type: "p1-fire",
    name: "am-sw-08",
    damageMod: 1,
    effects: [
      {type: 'element', value: "Fire"},
    ],
    description: "+1 Generate Fire"
  },
  {
    type: "p1-immobilize",
    name: "am-sw-09",
    damageMod: 1,
    effects: [
      {type: 'condition', value: "Immobilize"},
    ],
    description: "+1 Immobilize"
  },
  {
    type: "p1-curse",
    name: "am-sw-10",
    damageMod: 1,
    effects: [
      {type: 'condition', value: "Cursed"},
    ],
    description: "+1 Curse"
  },
  {
    type: "p2-fire",
    name: "am-sw-11",
    damageMod: 2,
    effects: [
      {type: 'element', value: "Fire"},
    ],
    description: "+2 Generate Fire"
  },
  {
    type: "p2-ice",
    name: "am-sw-13",
    damageMod: 2,
    effects: [
      {type: 'element', value: "Ice"},
    ],
    description: "+2 Generate Ice"
  },
  {
    type: "p0-earth-r",
    name: "am-sw-15",
    damageMod: 0,
    effects: [
      {type: 'element', value: "Earth"},
      {type: 'rolling', value: true},
    ],
    description: "+0 Generate Earth - Rolling"
  },
  {
    type: "p0-air-r",
    name: "am-sw-16",
    damageMod: 0,
    effects: [
      {type: 'element', value: "Air"},
      {type: 'rolling', value: true},
    ],
    description: "+0 Generate Air - Rolling"
  },
  {
    type: "p0-light-r",
    name: "am-sw-17",
    damageMod: 0,
    effects: [
      {type: 'element', value: "Light"},
      {type: 'rolling', value: true},
    ],
    description: "+0 Generate Light - Rolling"
  },
  {
    type: "p0-darkness-r",
    name: "am-sw-18",
    damageMod: 0,
    effects: [
      {type: 'element', value: "Darkness"},
      {type: 'rolling', value: true},
    ],
    description: "+0 Generate Darkness - Rolling"
  },
];