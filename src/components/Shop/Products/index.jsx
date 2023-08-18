/* eslint-disable no-unused-vars */
import ProductItem from "../ProductItem";
import classes from "./Style.module.css";

const PRODUCTS = [
  {
    id: "6805b19d-ad63-4860-b5ec-daf3ce7ef833",
    name: "Licensed Frozen Salad",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: "179.00",
  },
  {
    id: "9b74783f-3334-4d8c-813f-8a4f8b9ef42b",
    name: "Refined Plastic Hat",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    price: "492.00",
  },
  {
    id: "d03f547c-a43b-4df1-8bcc-5038527730da",
    name: "Intelligent Rubber Chips",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: "797.00",
  },
  {
    id: "6de3a11c-2fcb-4fe9-aac2-0afcab3bdd0b",
    name: "Fantastic Fresh Table",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    price: "175.00",
  },
  {
    id: "8994e455-5f4a-483f-bba0-7989641a2bba",
    name: "Ergonomic Granite Mouse",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    price: "125.00",
  },
  {
    id: "b63bf450-ce08-46fe-b61f-429c42cff30d",
    name: "Rustic Rubber Bacon",
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    price: "934.00",
  },
  {
    id: "e4473c54-a482-4cd0-af40-58e6b078c2e0",
    name: "Awesome Wooden Bacon",
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    price: "676.00",
  },
  {
    id: "160d7162-5230-4dda-966c-90c8ae76ad43",
    name: "Gorgeous Frozen Computer",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    price: "388.00",
  },
  {
    id: "746db36e-1ded-4ddd-ba55-b17f3f7c5c51",
    name: "Tasty Steel Soap",
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    price: "897.00",
  },
  {
    id: "741c108c-7ec8-49c0-80ee-261bf48ce8e7",
    name: "Small Rubber Bacon",
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    price: "352.00",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((x) => (
          <ProductItem
            key={x.id}
            title={x.name}
            price={+x.price}
            description={x.description}
            id={x.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
