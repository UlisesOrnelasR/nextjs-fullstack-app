import Link from "next/link";
import { navbarRoutes } from "@/routes/navbarRoutes";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession();
  console.log(session);

  return (
    <nav className="flex justify-between px-20 bg-slate-300 py-2">
      <h1>Nextjs Full</h1>
      <ul className="flex gap-x-3">
        {navbarRoutes.map(({ href, text, auth }) => {
          return (
            <li key={href}>
              <Link href={href}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
