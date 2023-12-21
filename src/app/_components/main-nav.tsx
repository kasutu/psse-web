"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { cn } from "@/utils/styles";
import { navConfig } from "@/config/nav";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-14 w-14" />
        <span className="hidden text-2xl font-bold uppercase sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="text-md flex items-center space-x-6 font-medium">
        {navConfig.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "font-semibold capitalize transition-colors hover:text-foreground/80",
              pathname === item.href ? "text-foreground" : "text-foreground/60",
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
