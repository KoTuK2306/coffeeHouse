const makePathToImage = (path: string) => `${process.env.PUBLIC_URL}/images/coffee/${path}.png`;

const coffee = {
  espresso: makePathToImage("espresso"),
  macchiato: makePathToImage("macchiato"),
  latte: makePathToImage("latte"),
  latteNesselrode: makePathToImage("latteNesselrode"),
  latteMacchiato: makePathToImage("latteMacchiato"),
  cortado: makePathToImage("cortado"),
  jupiterRings: makePathToImage("jupiterRings"),
  сatalan: makePathToImage("сatalan"),
  cappuccino: makePathToImage("cappuccino"),
  espressoNaranja: makePathToImage("espressoNaranja"),
  espressoGingerbread: makePathToImage("espressoGingerbread"),
  hotIceberg: makePathToImage("hotIceberg"),
};

export const coffeeImages = [
  {
    id: "espresso",
    name: "Эспрессо",
    price: 110,
    image: coffee.espresso,
  },
  {
    id: "macchiato",
    name: "Макиато",
    price: 110,
    image: coffee.macchiato,
  },
  {
    id: "latte",
    name: "Латте",
    price: 110,
    image: coffee.latte,
  },
  {
    id: "latteNesselrode",
    name: "Латте Нессельроде",
    price: 110,
    image: coffee.latteNesselrode,
  },
  {
    id: "latteMacchiato",
    name: "Латте Макиато",
    price: 110,
    image: coffee.latteMacchiato,
  },
  {
    id: "cortado",
    name: "Кортадо",
    price: 110,
    image: coffee.cortado,
  },
  {
    id: "jupiterRings",
    name: "Кольца Юпитера",
    price: 110,
    image: coffee.jupiterRings,
  },
  {
    id: "сatalan",
    name: "Каталан",
    price: 110,
    image: coffee.сatalan,
  },
  {
    id: "cappuccino",
    name: "Капучино",
    price: 110,
    image: coffee.cappuccino,
  },
  {
    id: "espressoNaranja",
    name: "Эспрессо Наранджа",
    price: 110,
    image: coffee.espressoNaranja,
  },
  {
    id: "espressoGingerbread",
    name: "Эспрессо Имбирный пряник",
    price: 110,
    image: coffee.espressoGingerbread,
  },
  {
    id: "hotIceberg",
    name: "Горячий Айсберг",
    price: 110,
    image: coffee.hotIceberg,
  },
];
