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
    ? `bg-white/90 backdrop-blur-md border-[#dbe9ff]`
    : `bg-white/95 backdrop-blur-md border-[#dbe9ff]`;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-all duration-700 ease-in-out ${headerBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <div className="flex w-full items-center justify-between gap-6 md:w-auto">
          <Link 
            href="/" 
            className="text-lg font-semibold tracking-tight text-[#0074ff] transition-colors duration-700 ease-in-out"
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
                    ? 'border-transparent bg-[#0074ff] !text-white hover:bg-[#006ae6]'
                    : 'border-[#0074ff]/40 text-[#0074ff] hover:border-[#0074ff] hover:bg-[#0074ff]/10'
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
              className="h-6 w-6 text-[#0074ff] transition-colors duration-700 ease-in-out"
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
            const baseClass = 'relative transition duration-700 ease-in-out after:absolute after:bottom-[-6px] after:left-1/2 after:h-[3px] after:w-8 after:-translate-x-1/2 after:rounded-full after:transition after:duration-300 after:opacity-0 after:content-[""] focus-visible:text-[#0074ff] focus-visible:after:bg-[#0074ff] focus-visible:after:opacity-100 active:text-[#0074ff] active:after:bg-[#0074ff] active:after:opacity-100';
            const activeClass = 'text-[#0074ff] font-semibold after:bg-[#0074ff] after:opacity-100';
            const inactiveClass = 'text-slate-900 hover:text-[#005bcc]';

            const linkClass = `${baseClass} ${isActive(link.href) ? activeClass : inactiveClass}`;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass}
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
                  ? 'border border-transparent bg-[#0074ff] text-white shadow-sm hover:bg-[#006ae6]'
                  : 'border border-[#0074ff]/40 text-[#0074ff] hover:border-[#0074ff] hover:bg-[#0074ff]/10'
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`origin-top overflow-hidden border-t border-[#dbe9ff] bg-white/95 px-4 pb-4 text-slate-900 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-112 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-3'
        }`}
        aria-hidden={!menuOpen}
      >
yoremobileclasses
        <nav className={`flex flex-col gap-2 py-4 text-sm font-semibold transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99c7ff] ${
                isActive(link.href)
                  ? 'bg-[#0074ff]/10 text-[#0074ff] shadow-sm'
                  : 'text-slate-700 hover:bg-[#0074ff]/5 hover:text-[#005bcc]'
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

