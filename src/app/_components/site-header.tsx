"use client";

import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { SignIn, SignUp } from "./auth";
import { UserButton, useAuth } from "@clerk/nextjs";

export function SiteHeader() {
  const { isSignedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* This is where the search bar supposed to be located */}
          </div>
          {isSignedIn ? (
            <div className="px-3">
              <UserButton />
            </div>
          ) : (
            <>
              <SignIn />
              <SignUp />
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
