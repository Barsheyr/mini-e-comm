import React, { useContext } from "react";
import Product from "../components/Product";

import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "women's clothing" ||
      item.category === "men's clothing" ||
      item.category === "electronics" ||
      item.category === "jewelery"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
