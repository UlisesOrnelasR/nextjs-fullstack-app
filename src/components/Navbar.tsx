import Link from "next/link";
import { navbarRoutes } from "@/routes/navbarRoutes";

const Navbar = () => {
  return (
    <nav>
      <ul>
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
