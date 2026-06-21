import { FiBriefcase, FiBook, FiLayers, FiMessageCircle, FiUser, FiBookOpen } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ICON_CLASS } from "~/lib/constants";
import { useGlassCursor } from "~/hooks/useGlassCursor";

const NAV_ITEMS = [
  { label: "Education", href: "#education", icon: FiBook },
  { label: "About", href: "#about", icon: FiUser },
  { label: "Experience", href: "#experience", icon: FiBriefcase },
  { label: "Projects", href: "#projects", icon: FiLayers },
  { label: "Blog", href: "/blog", icon: FiBookOpen },
];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [activeHref, setActiveHref] = useState<string>("");
  const glassRef = useGlassCursor<HTMLElement>();

  useEffect(() => {
    if (!isHomePage) {
      if (location.pathname.startsWith("/blog")) {
        setActiveHref("/blog");
      } else {
        setActiveHref("");
      }
      return;
    }

    const sections = NAV_ITEMS.filter((item) => item.href.startsWith("#")).map((item) =>
      document.getElementById(item.href.slice(1)),
    ).filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const triggerLine = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= triggerLine) {
          current = section;
        }
      }

      setActiveHref(`#${current.id}`);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHomePage, location.pathname]);

  const getHref = (href: string) => {
    if (href.startsWith("/")) {
      return href;
    }
    return isHomePage ? href : `/${href}`;
  };

  return (
    <header
      className="fixed inset-x-0 bottom-4 z-50 px-4 transition-all duration-300 translate-y-0 opacity-100"
    >
      <nav
        ref={glassRef}
        className="relative mx-auto flex w-full max-w-4xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 liquid-glass-nav focus-within:ring-2 focus-within:ring-accent-100"
        aria-label="Main navigation"
      >
        <div className="liquid-glass-cursor-glow" aria-hidden="true" />
        <a
          href={isHomePage ? "#home" : "/"}
          className="relative inline-flex items-center gap-1.5 sm:gap-2 rounded-full p-1 sm:pr-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-600"
          aria-label="Go to home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-default/50 bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <span className="text-sm font-bold tracking-wide text-text-primary font-heading">
              MR
            </span>
          </span>
          <span className="hidden sm:inline text-base font-bold tracking-tight text-text-primary font-heading">
            Rafiq
          </span>
        </a>

        <ul className="relative flex items-center gap-1 md:gap-2">
          {NAV_ITEMS.map((item) => {
            const IconComponent = item.icon;
            const itemHref = getHref(item.href);
            return (
              <li key={item.href}>
                <a
                  href={itemHref}
                  aria-label={item.label}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className={`inline-flex items-center justify-center rounded-full p-2.5 md:px-5 md:py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 ${
                    activeHref === item.href
                      ? "liquid-glass-active-item text-accent-700 font-semibold shadow-sm"
                      : "text-text-secondary hover:bg-white/10 hover:text-text-primary"
                  }`}
                >
                  <IconComponent className={ICON_CLASS.nav} />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={isHomePage ? "#contact" : "/#contact"}
          className="relative hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 md:inline-flex liquid-glass-accent-button text-white"
        >
          <FiMessageCircle className={ICON_CLASS.action} />
          Let's Talk
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

