import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeHref, setActiveHref] = useState<string>(
    NAV_ITEMS[0]?.href ?? "#about",
  );
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY < 24) {
        setIsVisible(true);
      } else if (scrollDelta > 8 && !isOpen) {
        setIsVisible(false);
      } else if (scrollDelta < -8) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
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
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsVisible(true);
      }
      return next;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsVisible(true);
  };

  return (
    <header
      className={`fixed inset-x-0 bottom-4 z-50 px-4 transition-all duration-300 ${
        isVisible || isOpen
          ? "translate-y-0 opacity-100"
          : "translate-y-[140%] opacity-0"
      }`}
    >
      <nav
        className="relative mx-auto flex w-full max-w-6xl items-center justify-between overflow-hidden rounded-[1.35rem] border border-white/20 bg-white/10 px-4 py-3 shadow-[0_14px_44px_rgba(2,6,23,0.55)] ring-1 ring-inset ring-white/10 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-white/8 to-transparent" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/35" />

        <a
          href="#home"
          className="relative inline-flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
            <img src="/Rafiq-logo.png" alt="Rafiq logo" className="h-5 w-5" />
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-100/95">
            Muhammad Rafiq
          </span>
        </a>

        <ul className="relative hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  activeHref === item.href
                    ? "border border-white/25 bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.32)]"
                    : "text-slate-200/95 hover:bg-white/14 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="relative hidden rounded-full border border-white/30 bg-white/25 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition hover:bg-white/30 md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          type="button"
          onClick={toggleMenu}
          className="relative inline-flex items-center rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-nav"
          className="absolute inset-x-4 bottom-full mb-2 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-[0_12px_36px_rgba(2,6,23,0.55)] ring-1 ring-inset ring-white/10 backdrop-blur-xl md:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/7 to-transparent" />
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className={`relative block rounded-lg px-3 py-2 text-sm transition ${
                    activeHref === item.href
                      ? "border border-white/20 bg-white/20 text-white"
                      : "text-slate-100/95 hover:bg-white/14 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="relative block rounded-lg border border-white/30 bg-white/24 px-3 py-2 text-center text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
