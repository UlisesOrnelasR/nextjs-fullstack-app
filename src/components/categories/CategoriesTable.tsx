"use client";
import { Category } from "@prisma/client";
import { Table } from "../ui/Table";
import { Button } from "../ui";

interface CategoriesTableProps {
  categories: Category[];
}

const CategoriesTable = ({ categories }: CategoriesTableProps) => {
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-x-2">
            <Button>Edit</Button>
            <Button>Delete</Button>
          </div>
        );
      },
    },
  ];

  return <Table data={categories} columns={columns} />;
};
export default CategoriesTable;
