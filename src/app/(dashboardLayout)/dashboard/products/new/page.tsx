import ProductsForm from "@/components/products/ProductsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create product",
  description: "Create a new products",
};

const ProductPage = () => {
  return (
    <div>
      <ProductsForm />
    </div>
  );
};

export default ProductPage;
