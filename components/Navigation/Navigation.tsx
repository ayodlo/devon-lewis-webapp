import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  return (
    <header className="w-full py-16">
      <nav className="flex w-full items-center justify-between">
        <Link
          href="/"
          className="
        text-4xl
        font-semibold
        tracking-tight
        text-secondary
        transition-opacity
        hover:opacity-80
      "
        >
          Devon <span className="text-primary">Lewis</span>
        </Link>

        <NavigationMenu className="w-auto">
          <NavigationMenuList
            className="
          gap-10
          text-base
          font-medium
          tracking-tight
          text-secondary
        "
          >
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/projects"
                className="rounded-full px-6 py-4"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/music"
                className="rounded-full px-6 py-4"
              >
                Music
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/music"
                className="rounded-full px-6 py-4"
              >
                Producer Battles
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/music"
                className="rounded-full px-6 py-4"
              >
                About Me
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/music"
                className="rounded-full px-6 py-4"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
