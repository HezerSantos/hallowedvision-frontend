import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight, HiXMark } from "react-icons/hi2";
import useWidth from "../../../common/hooks/useWidth";
import "./DefaultNav.scss";
import IconLogo from "../Icons/IconLogo/IconLogo";

const NAV_BREAKPOINT = 700;

const NAV_LINKS = {
  home: {
    label: "Home",
    path: "/",
  },
  portfolio: {
    label: "Portfolio",
    path: "/portfolio",
  },
  packages: {
    label: "Packages",
    path: "/packages",
  },
  contact: {
    label: "Contact",
    path: "/contact",
  },
  terms: {
    label: "Terms & Conditions",
    path: "/terms-and-conditions",
  },
} as const;

const SOCIAL_LINKS = {
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hezer-santos",
  },
} as const;

const DefaultNav: React.FC = () => {
  const width = useWidth();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = width <= NAV_BREAKPOINT;

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navigationLinks = Object.entries(NAV_LINKS);

  return (
    <>
      <header className="nav">
        <div className="nav__container">
          <Link
            to={NAV_LINKS.home.path}
            className="nav__brand"
            aria-label="Hallowed Visions home"
          >
            <IconLogo width={"3rem"} />

            <span className="nav__brand-name">
              Hallowed <span>Visions.</span>
            </span>
          </Link>

          {!isMobile && (
            <>
              <nav className="nav__desktop">
                {navigationLinks
                  .filter(([key]) => key !== "terms" && key !== "home")
                  .map(([key, item]) => (
                    <Link
                      key={key}
                      to={item.path}
                      className={`nav__link ${
                        isActive(item.path) ? "nav__link--active" : ""
                      }`}
                      aria-current={isActive(item.path) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
              </nav>

              <Link to={NAV_LINKS.contact.path} className="nav__cta">
                <span>Let's Talk</span>
                <HiArrowUpRight />
              </Link>
            </>
          )}

          {isMobile && (
            <button
              className={`nav__toggle ${
                isMenuOpen ? "nav__toggle--active" : ""
              }`}
              onClick={() => setIsMenuOpen((previous) => !previous)}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span />
              <span />
            </button>
          )}
        </div>
      </header>

      {isMobile && (
        <>
          <div
            className={`nav__backdrop ${
              isMenuOpen ? "nav__backdrop--visible" : ""
            }`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <aside
            id="mobile-navigation"
            className={`nav__sidebar ${isMenuOpen ? "nav__sidebar--open" : ""}`}
            aria-hidden={!isMenuOpen}
          >
            <div className="nav__sidebar-header">
              <Link
                to={NAV_LINKS.home.path}
                className="nav__brand"
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <IconLogo width={"3rem"} />
                <span className="nav__brand-name">
                  Hallowed <span>Visions.</span>
                </span>
              </Link>

              <button
                className="nav__close"
                onClick={closeMenu}
                aria-label="Close navigation"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <HiXMark />
              </button>
            </div>

            <div className="nav__sidebar-content">
              <span className="nav__eyebrow">EXPLORE</span>

              <nav className="nav__mobile">
                {navigationLinks.map(([key, item], index) => (
                  <Link
                    key={key}
                    to={item.path}
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                    aria-current={isActive(item.path) ? "page" : undefined}
                    className={`nav__mobile-link ${
                      isActive(item.path) ? "nav__mobile-link--active" : ""
                    }`}
                  >
                    <span className="nav__mobile-number">0{index + 1}</span>

                    <span>{item.label}</span>

                    <HiArrowUpRight className="nav__mobile-arrow" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="nav__sidebar-footer">
              <span className="nav__eyebrow">HAVE A PROJECT IN MIND?</span>

              <Link
                to={NAV_LINKS.contact.path}
                className="nav__sidebar-contact"
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Let's create something.
                <HiArrowUpRight />
              </Link>

              <div className="nav__sidebar-bottom">
                <span>© {new Date().getFullYear()} Hallowed Visions</span>

                <a
                  href={SOCIAL_LINKS.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={SOCIAL_LINKS.linkedin.label}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default DefaultNav;
