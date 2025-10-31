'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks, siteConfig } from '@/lib/content';

const contactActions = [
  {
    label: 'Call',
    href: siteConfig.phoneHref,
  },
  {
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: 'WhatsApp',
    href: siteConfig.whatsappHref,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [overWhiteSection, setOverWhiteSection] = useState(false);
  const lastStateRef = useRef(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (pathname !== '/') {
      setOverWhiteSection(false);
      lastStateRef.current = false;
      return;
    }

    const scrollCheck = () => {
      const whiteSection = document.getElementById('white-content-start');
      if (!whiteSection) return;

      const headerBottom = headerRef.current?.getBoundingClientRect()?.bottom ?? 80;
      const rect = whiteSection.getBoundingClientRect();
      const isOverWhite = rect.top <= headerBottom;

      if (isOverWhite !== lastStateRef.current) {
        lastStateRef.current = isOverWhite;
        setOverWhiteSection(isOverWhite);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      scrollCheck();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial checks after mount (account for async layout shifts)
    scrollCheck();
    const timeout1 = setTimeout(scrollCheck, 100);
    const timeout2 = setTimeout(scrollCheck, 300);
    const timeout3 = setTimeout(scrollCheck, 600);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const isActive = (href) => (href === '/' ? pathname === href : pathname?.startsWith(href));

  const isHome = pathname === '/';
  
  // Gradual transition for non-home pages: Start at 100px, fully transitioned at 400px
  const scrollThreshold = 100;
  const scrollMax = 400;
  const scrollProgress = Math.min(1, Math.max(0, (scrollY - scrollThreshold) / (scrollMax - scrollThreshold)));

  // On home page, rely entirely on section detection so header only flips when background changes.
  // On inner pages fall back to scroll progress behaviour.
  const shouldBeWhite = isHome ? overWhiteSection : scrollProgress >= 0.5;
    
  const headerBg = isHome && !shouldBeWhite
    ? `bg-[#521113]/80 backdrop-blur-md border-[#521113]/20`
    : `bg-white/95 backdrop-blur-md border-red-100`;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-all duration-700 ease-in-out ${headerBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <div className="flex w-full items-center justify-between gap-6 md:w-auto">
          <Link 
            href="/" 
            className={`text-lg font-semibold tracking-tight transition-colors duration-700 ease-in-out ${
              isHome && !shouldBeWhite ? 'text-yellow-400!' : 'text-red-900!'
            }`}
          >
            {siteConfig.name}
          </Link>
          <div className="flex items-center gap-3 md:hidden">
            {contactActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`rounded-full border px-3 py-1 text-sm font-medium shadow-sm transition duration-700 ease-in-out ${
                  action.label === 'Call'
                    ? 'bg-yellow-500 text-black! hover:bg-yellow-400'
                    : isHome && !shouldBeWhite
                    ? 'border-yellow-400/50 text-yellow-400! hover:border-yellow-400 hover:bg-yellow-400/10'
                    : 'border-red-200 text-red-900! hover:border-red-300 hover:bg-red-50'
                }`}
              >
                {action.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className={`h-6 w-6 transition-colors duration-700 ease-in-out ${
                isHome && !shouldBeWhite ? 'text-yellow-400!' : 'text-red-900!'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
          {navigationLinks.map((link) => {
            const activeClass = 'text-yellow-400! font-semibold';
            const inactiveDark = 'text-red-900! hover:text-red-700';
            const inactiveLight = 'text-yellow-400! hover:text-yellow-300';

            const linkClass = isHome && !shouldBeWhite
              ? isActive(link.href) ? activeClass : inactiveLight
              : isActive(link.href) ? activeClass : inactiveDark;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition duration-700 ease-in-out ${linkClass}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {contactActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-700 ease-in-out ${
                action.label === 'Call'
                  ? 'bg-yellow-500 text-black! shadow-sm hover:bg-yellow-400'
                  : isHome && !shouldBeWhite
                  ? 'border border-yellow-400/50 text-yellow-400! hover:border-yellow-400 hover:bg-yellow-400/10'
                  : 'border border-red-200 text-red-900! hover:border-red-300 hover:bg-red-50'
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`origin-top overflow-hidden border-t border-red-900/40 bg-[#521113]/95 px-4 pb-4 text-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-112 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-3'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className={`flex flex-col gap-2 py-4 text-sm font-semibold transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-2 transition ${
                isActive(link.href)
                  ? 'bg-yellow-100/10 text-yellow-400!'
                  : 'text-red-100 hover:bg-yellow-100/5 hover:text-yellow-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

