"use client";

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
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-[#f3f4f6] bg-[#F9FAFB]/70 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link
          href="#top"
          className="flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/assets/logo-midtown.png"
            alt={`${SITE.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="text-xl font-bold tracking-tight text-[#181B20]">
            Midtown <span className="text-[#2962FF]">Dental Solutions</span>
          </span>
        </Link>

        <NavigationMenu className="hidden max-w-none md:flex">
          <NavigationMenuList className="gap-1">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    "nav-link inline-flex rounded-lg px-3 py-2 text-sm font-medium"
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#contact" className="btn-nav-login hidden sm:inline-flex">
            Contact
          </a>
          <a href="#contact" className="btn-header-cta hidden sm:inline-flex">
            Request support
          </a>
          <a href="#contact" className="btn-header-cta sm:hidden">
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
