import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const NAV_LINKS = ["HOME", "MENU", "LOYALTY"] as const;

const LINK_TO_PATH: Record<(typeof NAV_LINKS)[number], string> = {
  HOME: "/",
  MENU: "/Menu",
  LOYALTY: "/Loyalty",
};

interface NavbarProps {
  activeLink?: (typeof NAV_LINKS)[number];
}

export default function Navbar({ activeLink = "HOME" }: NavbarProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        {/* Logo */}
        <div
          className={styles.logo}
          onClick={() => handleNavigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="logo" className={styles.logoImg} />
        </div>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <button
                className={`${styles.link} ${
                  label === activeLink ? styles.linkActive : ""
                }`}
                onClick={() => handleNavigate(LINK_TO_PATH[label])}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className={styles.ctas}>
          <button
            className={styles.btnOutline}
            onClick={() => handleNavigate("/Contact")}
          >
            CONTACT
          </button>

            <a href='https://order.toasttab.com/online/kippo-ramen-606-s-broadway' target="_blank" rel="noreferrer">
              <button className={styles.btnFilled}>
                ORDER NOW
              </button>
            </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${
            menuOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuContent}>
          {/* Close Button */}
          <button
            className={styles.closeButton}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>

          {/* Navigation Links */}
          <nav className={styles.mobileLinks}>
            {NAV_LINKS.map((label) => (
              <button
                key={label}
                className={`${styles.mobileLink} ${
                  label === activeLink ? styles.mobileLinkActive : ""
                }`}
                onClick={() => handleNavigate(LINK_TO_PATH[label])}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div className={styles.mobileCtas}>
            <button
              className={styles.mobileBtnOutline}
              onClick={() => handleNavigate("/Contact")}
            >
              CONTACT
            </button>
            <a href='https://order.toasttab.com/online/kippo-ramen-606-s-broadway' target="_blank" rel="noreferrer">
              <button className={styles.mobileBtnFilled}>
                ORDER NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}