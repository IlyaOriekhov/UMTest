import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./Header.module.css";
import sprite from "../../assets/sprite.svg";

const Header = ({ onGetInTouchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["SERVICES", "OUR APPROACH", "PROJECTS", "ABOUT US", "BLOG"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={clsx(styles.header, { [styles.scrolled]: isScrolled })}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <svg width="73" height="32">
            <use href={`${sprite}#icon-logo-desk`} />
          </svg>
        </div>

        <nav
          className={clsx(styles.nav, { [styles.navOpen]: isMobileMenuOpen })}
        >
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={styles.navLink}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className={styles.ctaButton} onClick={onGetInTouchClick}>
          <span>LET'S TALK</span>
          <div className={styles.ctaIcon}>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-write`} />
            </svg>
          </div>
        </button>

        <button
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span
            className={clsx(styles.hamburger, {
              [styles.hamburgerOpen]: isMobileMenuOpen,
            })}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={toggleMobileMenu} />
      )}
    </header>
  );
};

export default Header;
