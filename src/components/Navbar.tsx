import Link from "next/link";
import { navbarRoutes } from "@/routes/navbarRoutes";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";

export const dynamic = "force-dynamic";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log({ session });

  return (
    <nav className="flex justify-between px-20 bg-slate-300 py-2">
      <h1>Nextjs Full</h1>
      <ul className="flex gap-x-3">
        {session && (
          <>
            {navbarRoutes.map(
              ({ href, text, auth }) =>
                auth && (
                  <li key={href}>
                    <Link href={href}>{text}</Link>
                  </li>
                )
            )}
            <li>
              Hi {session?.user?.name} {session?.user?.last_name}!
            </li>
          </>
        )}
        {!session &&
          navbarRoutes.map(
            ({ href, text, auth }) =>
              !auth && (
                <li key={href}>
                  <Link href={href}>{text}</Link>
                </li>
              )
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
