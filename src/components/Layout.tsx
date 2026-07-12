import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const PATH_TO_ACTIVE: Record<string, "HOME" | "MENU" | "SPECIALS" | "LOYALTY"> = {
  "/":          "HOME",
  "/Menu":      "MENU",
  "/Specials": "SPECIALS",
  "/Loyalty":   "LOYALTY",
};

export default function Layout() {
  const { pathname } = useLocation();
  const activeLink = PATH_TO_ACTIVE[pathname] ?? "HOME";

  return (
    <>
      <Navbar activeLink={activeLink} />
      <Outlet />
    </>
  );
}