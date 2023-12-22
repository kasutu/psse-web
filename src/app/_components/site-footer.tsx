import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Button } from "./ui/button";
export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {siteConfig.author}
          </a>{" "}
          for{" "}
          <a
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {siteConfig.organization}
          </a>{" "}
          ✨
        </p>
        <div className="flex items-center space-x-2">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Button variant="ghost" className={"w-9 px-0"}>
              <Icons.discord className="h-6 w-6" />
              <span className="sr-only">Discord</span>
            </Button>
          </Link>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Button variant="ghost" className={"w-9 px-0"}>
              <Icons.twitch className="h-5 w-5" />
              <span className="sr-only">Twitch</span>
            </Button>
          </Link>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Button variant="ghost" className={"w-9 px-0"}>
              <Icons.facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" className={"w-9 px-0"}>
              <Icons.twitter className="h-4 w-4 fill-current" />
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
