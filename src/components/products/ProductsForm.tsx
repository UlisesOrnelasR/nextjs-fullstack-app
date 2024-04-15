"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label, Input, Button } from "@/components/ui";
import { createProductSchema } from "@/schemas/productSchema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ProductsForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const product = await res.json();
    console.log(product);
    router.push("/dashboard/products");
    router.refresh();
    toast.success("Product created successfully");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>Name of product</Label>
        <Input {...register("name")} />
        {errors?.name && <p className="text-red-500">{errors.name.message}</p>}
        <Label>Description of product</Label>
        <Input {...register("description")} />
        {errors?.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
        <Label>Price of product</Label>
        <Input {...register("price")} />
        {errors?.price && (
          <p className="text-red-500">{errors.price.message}</p>
        )}
        <Label>Category of product</Label>
        <Input {...register("category")} />
        {errors?.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
        <Label>Image of product</Label>
        <Input {...register("image")} />
        {errors?.image && (
          <p className="text-red-500">{errors.image.message}</p>
        )}
        <Button className="block mt-2">Create product</Button>
      </form>
    </div>
  );
};

export default ProductsForm;
