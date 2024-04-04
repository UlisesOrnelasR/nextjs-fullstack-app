"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label, Input, Button } from "@/components/ui";
import { createProductSchema } from "@/app/schemas/productSchema";

const ProductsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>Name of product</Label>
        <Input {...register("name")} />
        <Label>Description of product</Label>
        <Input {...register("description")} />
        <Label>Price of product</Label>
        <Input {...register("price")} />
        <Label>Image of product</Label>
        <Input {...register("image")} />
        <Button className="block mt-2">Create product</Button>
      </form>
    </div>
  );
};

export default ProductsForm;
