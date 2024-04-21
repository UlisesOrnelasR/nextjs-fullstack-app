"use client";

import { Product } from "@prisma/client";
import { Button, Table } from "../ui";

interface ProductTableProps {
  products: Product[];
}

function ProductTable({ products }: ProductTableProps) {
  // console.log(products);
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Stock",
      accessorKey: "stock",
    },
    {
      header: "Image",
      accessorKey: "image",
    },
    {
      header: "URL",
      accessorKey: "slug",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Author",
      accessorKey: "author",
    },
    {
      header: "Actions",
      cell: () => {
        return (
          <div className="flex gap-x-2">
            <Button href="/dashboard/products/edit">Editar Producto</Button>
          </div>
        );
      },
    },
  ];

  return <Table data={products} columns={columns} />;
}
export default ProductTable;
