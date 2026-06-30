import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png"

const NAV_LINKS = ["HOME", "MENU", "LOCATIONS", "CONTACT"] as const;

const LINK_TO_PATH: Record<(typeof NAV_LINKS)[number], string> = {
  HOME:      "/",
  MENU:      "/Menu",
  LOCATIONS: "/Locations",
  CONTACT:   "/Contact",
};

interface NavbarProps {
  activeLink?: (typeof NAV_LINKS)[number];
}

export default function Navbar({ activeLink = "HOME" }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <div className={styles.logo} onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={logo} className={styles.logoImg}/>
      </div>

      {/* Links */}
      <ul className={styles.links}>
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <button
              className={`${styles.link} ${label === activeLink ? styles.linkActive : ""}`}
              onClick={() => navigate(LINK_TO_PATH[label])}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div className={styles.ctas}>
        <button className={styles.btnOutline}>TAKE AWAY</button>
        <button className={styles.btnFilled}>ORDER NOW</button>
      </div>
    </nav>
  );
}