"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/producer-battles", label: "Producer Battles" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-8 py-8 lg:py-16">
      <nav className="flex w-full items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-semibold tracking-tight transition-opacity hover:opacity-80 lg:text-4xl"
        >
          <span className="text-secondary-foreground">Devon</span>{" "}
          <span className="text-primary">Lewis</span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex w-auto">
          <NavigationMenuList className="gap-4 text-base font-medium tracking-tight text-secondary lg:gap-10">
            {navLinks.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  href={href}
                  className="rounded-full px-4 py-3 lg:px-6 lg:py-4"
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center text-secondary"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-1 border-t border-border pt-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-secondary transition-colors hover:bg-muted hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
