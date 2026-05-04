"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS, SITE } from "@/lib/constants/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200/90 bg-slate-100/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm"
          : "border-b border-white/25 bg-transparent shadow-none backdrop-blur-0"
      )}
    >
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-12">
        <Link
          href="#top"
          className="flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <div className="shrink-0 rounded-2xl bg-sky-50 p-1.5 ring-1 ring-sky-100/80 shadow-[0_1px_2px_rgba(14,165,233,0.12)] dark:bg-sky-950/40 dark:ring-sky-800/60">
            <Image
              src="/assets/logo-midtown.png"
              alt={`${SITE.name} logo`}
              width={80}
              height={80}
              className="h-20 w-20 rounded-xl object-cover"
            />
          </div>
          <span
            className={cn(
              "max-w-[180px] truncate text-base font-bold tracking-tight transition-colors duration-300 sm:max-w-none sm:text-xl",
              isScrolled ? "text-[#181B20]" : "text-white"
            )}
          >
            Midtown{" "}
            <span className={cn("transition-colors duration-300", isScrolled ? "text-[#2962FF]" : "text-white")}>
              Dental Solutions
            </span>
          </span>
        </Link>

        <NavigationMenu className="hidden max-w-none md:flex">
          <NavigationMenuList className="gap-1">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    "nav-link inline-flex rounded-lg px-3 py-2 text-sm font-medium",
                    isScrolled
                      ? "hover:bg-slate-200/70"
                      : "text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 data-active:bg-white/10 data-active:hover:bg-white/15"
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors md:hidden",
              isScrolled
                ? "border-slate-300/80 bg-slate-200/80 text-[#0f172a]"
                : "border-white/40 bg-white/10 text-white"
            )}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
          <a
            href="#contact"
            className={cn("btn-nav-login hidden sm:inline-flex", !isScrolled && "text-white hover:text-white")}
          >
            Contact
          </a>
        </div>
      </div>
      {mobileMenuOpen ? (
        <div className="border-t border-slate-200/90 bg-slate-100/98 px-4 py-3 shadow-[0_14px_28px_rgba(15,23,42,0.12)] md:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl bg-[#f1f5f9] px-3 py-2 text-center text-sm font-semibold text-[#0f172a] transition-colors hover:bg-[#dbeafe] hover:text-[#1d4ed8]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
