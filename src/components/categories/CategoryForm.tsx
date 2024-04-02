"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label, Input, Button } from "@/components/ui";
import { createCategorySchema } from "@/app/schemas/categorySchema";

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCategorySchema),
  });

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
