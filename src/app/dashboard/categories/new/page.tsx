import { Label, Input, Button } from "@/components/ui";
const CategoryPage = () => {
  return (
    <div>
      <form action="">
        <Label>Name of category</Label>
        <Input />
        <Label>Description of category</Label>
        <Input />
        <Label>Published</Label>
        <Input />
        <Button className="block mt-2">Create category</Button>
      </form>
    </div>
  );
};

export default CategoryPage;
