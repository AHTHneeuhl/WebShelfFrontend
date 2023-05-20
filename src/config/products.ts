import { applicationRoutes as routes } from "config";

import books from "assets/images/books.jpg";
import clothes from "assets/images/clothes.jpg";
import electronics from "assets/images/electronics.jpg";
import womenFashion from "assets/images/women-fashion.jpg";
import menFashion from "assets/images/men-fashion.jpg";

const products = [
  {
    id: 1,
    name: "Books",
    picture: books,
    path: routes.books,
  },
  {
    id: 2,
    name: "Clothes",
    picture: clothes,
    path: routes.clothes,
  },
  {
    id: 3,
    name: "Electronics",
    picture: electronics,
    path: routes.electronics,
  },
  {
    id: 4,
    name: "Women's Fashion",
    picture: womenFashion,
    path: routes.womenFashion,
  },
  {
    id: 5,
    name: "Men's Fashion",
    picture: menFashion,
    path: routes.menFashion,
  },
];

export default products;
