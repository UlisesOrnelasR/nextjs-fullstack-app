"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui";

const Sidebar = () => {
  return (
    <div className="w-1/5 mt-2">
      <div className="bg-slate-300 h-full">
        <ul>
          <li>
            <Button
              onClick={() => {
                signOut();
              }}
            >
              Cerrar Sesion
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
