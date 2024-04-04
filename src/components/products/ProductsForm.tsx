"use client";
import { useForm } from "react-hook-form";
import { Label, Input, Button } from "@/components/ui";

const ProductsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
