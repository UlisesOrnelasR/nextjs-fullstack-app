"use client";
import { User } from "@prisma/client";
import { Table } from "../ui/Table";
import { Button } from "../ui";

interface Props {
  users: User[];
}

function UserTable({ users }: Props) {
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Lastname",
      accessorKey: "last_name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Confirmed email",
      accessorKey: "confirmed_email",
    },
    {
      header: "Role",
      accessorKey: "role",
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

  return <Table data={users} columns={columns} />;
}
export default UserTable;
