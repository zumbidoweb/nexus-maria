import angular from "./assets/angular.svg";
import react from "./assets/react.svg";
import { getImages } from '@/utils/api'

const cards = [
  { id: 1, name: "aurelia", image: react },
  { id: 2, name: "aurelia", image: react },
  { id: 3, name: "angular", image: angular },
  { id: 4, name: "angular", image: angular },
  { id: 5, name: "ember", image: react },
  { id: 6, name: "ember", image: react },
  { id: 7, name: "vue", image: react },
  { id: 8, name: "vue", image: react },
  { id: 9, name: "backbone", image: react },
  { id: 10, name: "backbone", image: react },
  { id: 11, name: "react", image: react },
  { id: 12, name: "react", image: react },
];


export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));
