import CategoryForm from "@/components/categories/CategoryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create category",
  description: "Create a new category",
};

const CategoryPage = () => {
  return (
    <div>
      <CategoryForm />
    </div>
  );
};

export default CategoryPage;
