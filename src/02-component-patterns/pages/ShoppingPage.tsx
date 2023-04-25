import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
