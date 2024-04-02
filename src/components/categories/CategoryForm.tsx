"use client";
import { useForm } from "react-hook-form";
import { Label, Input, Button } from "@/components/ui";

const CategoryForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Label>Name of category</Label>
        <Input {...register("name")} />
        <Label>Description of category</Label>
        <Input {...register("description")} />
        <Label>Published</Label>
        <Input type="checkbox" {...register("published")} />
        <Button className="block mt-2">Create category</Button>
      </form>
    </div>
  );
};

export default CategoryForm;
