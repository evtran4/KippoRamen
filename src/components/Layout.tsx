import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const PATH_TO_ACTIVE: Record<string, "HOME" | "MENU" | "LOCATIONS" | "CONTACT"> = {
  "/":          "HOME",
  "/Menu":      "MENU",
  "/Locations": "LOCATIONS",
  "/Contact":   "CONTACT",
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