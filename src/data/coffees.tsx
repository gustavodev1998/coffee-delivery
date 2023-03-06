import { v4 as uuidv4 } from "uuid";

import expresso from "../assets/coffeetypes/expresso.svg";
import americano from "../assets/coffeetypes/americano.svg";
import cafeComLeite from "../assets/coffeetypes/cafeComLeite.svg";
import chocolateQuente from "../assets/coffeetypes/chocolateQuente.svg";
import cremoso from "../assets/coffeetypes/cremoso.svg";
import gelado from "../assets/coffeetypes/gelado.svg";
import latte from "../assets/coffeetypes/latte.svg";
import macchiato from "../assets/coffeetypes/macchiato.svg";
import mocaccino from "../assets/coffeetypes/mocaccino.svg";

export interface CoffeeCard {
  id: string;
  src: string;
  alt: string;
  tags?: string[];
  title: string;
  subtitle?: string;
  price: string;
}

export const coffees: CoffeeCard[] = [
  {
    id: uuidv4(),
    src: expresso,
    alt: "expresso",
    tags: ["Tradicional"],
    title: "Expresso Tradicional",
    subtitle: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
  },

  {
    id: uuidv4(),
    src: americano,
    alt: "americano",
    tags: ["Tradicional"],
    title: "Expresso Americano",
    subtitle: "Expresso diluído, menos intenso que o tradicional",
    price: "9,99",
  },

  {
    id: uuidv4(),
    src: gelado,
    alt: "gelado",
    tags: ["Tradicional"],
    title: "Expresso Gelado",
    subtitle: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,99",
  },

  {
    id: uuidv4(),
    src: cafeComLeite,
    alt: "cafeComLeite",
    tags: ["Tradicional", "Com Leite"],
    title: "Café com Leite",
    subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,99",
  },

  {
    id: uuidv4(),
    src: latte,
    alt: "latte",
    tags: ["Tradicional", "Com Leite"],
    title: "Latte",
    subtitle: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,99",
  },

  {
    id: uuidv4(),
    src: chocolateQuente,
    alt: "chocolateQuente",
    tags: ["Tradicional", "Com Leite"],
    title: "Chocolate Quente",
    subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,99",
  },

  {
    id: uuidv4(),
    src: cremoso,
    alt: "cremoso",
    tags: ["Tradicional", "Com Leite"],
    title: "Expresso cremoso",
    subtitle: "Café expresso tradicional com espuma cremosa",
    price: "9,99",
  },

  {
    id: uuidv4(),
    src: macchiato,
    alt: "macchiato",
    tags: ["Tradicional", "Com Leite"],
    title: "Macchiato",
    subtitle: "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,99",
  },

  {
    id: uuidv4(),
    src: mocaccino,
    alt: "mocaccino",
    tags: ["Tradicional", "Com Leite"],
    title: "Mocaccino",
    subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,99",
  },
];
