"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label, Input, Button } from "@/components/ui";
import { createCategorySchema } from "@/schemas/categorySchema";

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCategorySchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);

    const res = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const category = await res.json();
    // console.log(category);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Label>Name of category</Label>
        <Input {...register("name")} />
        {errors?.name && <p className="text-red-500">{errors.name.message}</p>}
        <Label>Description of category</Label>
        <Input {...register("description")} />
        {errors?.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <Label>Published</Label>
        <Input type="checkbox" {...register("published")} />
        <Button className="block mt-2">Create category</Button>
      </form>
    </div>
  );
};

export default CategoryForm;
