const makePathToImage = (path: string) => `${process.env.PUBLIC_URL}/images/weekOffers/${path}.png`;

const icons = {
  one: makePathToImage("imageOne"),
  two: makePathToImage("imageTwo"),
  three: makePathToImage("imageThree"),
};

export const weekOffers = [
  {
    id: "one",
    icon: icons.one,
  },
  {
    id: "two",
    icon: icons.two,
  },
  {
    id: "three",
    icon: icons.three,
  },
];
