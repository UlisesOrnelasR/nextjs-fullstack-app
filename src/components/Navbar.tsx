import Link from "next/link";
import { navbarRoutes } from "@/routes/navbarRoutes";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 bg-slate-300 py-2">
      <h1>Nextjs Full</h1>
      <ul className="flex gap-x-3">
        {navbarRoutes.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
