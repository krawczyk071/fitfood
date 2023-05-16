export const recipes = [
  {
    _id: 1231,
    name: "Schabowy",
    tags: ["pork", "meat"],
    photo:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/15-minute-chicken-halloumi-burgers-7dda022.jpg?quality=90&webp=true&resize=800",
    ingredients: ["1pkt Meat", "6 Potatoes", "1spn sugar"],
    directions: [
      "Preheat the oven and prepare the pan: Start by preheating the oven to 350°F, then lightly spritz a 9x5 or 8 1/2x 4 1/2-inch loaf pan with non-stick spray.",
    ],
    time: "90",
    servings: "4",
    calories: "1230",
    author: "Jake",
  },
  {
    _id: 1232,
    name: "Mielony",
    calories: "1230",
  },
  {
    _id: 1233,
    name: "Psia karma",
    calories: "1030",
  },
  {
    _id: 1234,
    name: "Mizria",
    calories: "830",
  },
  {
    _id: 1235,
    name: "Eskalopki",
    calories: "1930",
  },
  {
    _id: 1236,
    name: "Kalarepa",
    calories: "330",
  },
];

export const menu = [1231, 1232, 1233, 1234, 1235];
export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export const ate = [
  { date: "Thursday", meals: [1231, 1234, 1235] },
  { date: "Friday", meals: [1233, 1235] },
  { date: "Saturday", meals: [1234, 1235] },
];
