import { makePathToPublic } from "./utils/makePathToPublic";

const coffee = {
  espresso: makePathToPublic("/images/coffee/espresso.png"),
  macchiato: makePathToPublic("/images/coffee/macchiato.png"),
  latte: makePathToPublic("/images/coffee/latte.png"),
  latteNesselrode: makePathToPublic("/images/coffee/latteNesselrode.png"),
  latteMacchiato: makePathToPublic("/images/coffee/latteMacchiato.png"),
  cortado: makePathToPublic("/images/coffee/cortado.png"),
  jupiterRings: makePathToPublic("/images/coffee/jupiterRings.png"),
  сatalan: makePathToPublic("/images/coffee/сatalan.png"),
  cappuccino: makePathToPublic("/images/coffee/cappuccino.png"),
  espressoNaranja: makePathToPublic("/images/coffee/espressoNaranja.png"),
  espressoGingerbread: makePathToPublic("/images/coffee/espressoGingerbread.png"),
  hotIceberg: makePathToPublic("/images/coffee/hotIceberg.png"),
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
