import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";

export default function EngagePage() {
  return (
    <div className="container">
      <PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
        <PageHeaderHeading>Join the Action.</PageHeaderHeading>
        <PageHeaderDescription>
          Participate in surveys, registrations, and more. Your input shapes our
          community.
        </PageHeaderDescription>
      </PageHeader>
      <div className="flex flex-col items-center justify-start">
        <ActionCard />
      </div>
    </div>
  );
}

function ActionCard() {
  return (
    // TODO(kasutu): change to dynamic id
    <a href="/engage/randomId">
      <Card className="flex w-full cursor-pointer flex-col items-center justify-between hover:border-primary  sm:w-[820px] sm:flex-row">
        <div>
          <CardHeader>
            <CardTitle className="font-bold capitalize text-primary">
              Your Vote Counts! Decide the Next Gaming Challenge!
            </CardTitle>
            <CardDescription className="font-semibold">
              Join the <strong>Ninjas Esports Tournament</strong>! Cast your
              vote and help us select the next big game for the competition.
            </CardDescription>
          </CardHeader>
        </div>
        <div
          className="h-40 w-full bg-secondary sm:w-96"
          style={{
            backgroundImage:
              'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felements-cover-images-0.imgix.net%2F3d788bcf-d92a-4d5e-85b9-bcbc3a69f3b2%3Fauto%3Dcompress%252Cformat%26fit%3Dmax%26w%3D710%26s%3D01fb205ae2f250c0a3d64febc1e71063&f=1&nofb=1&ipt=af77c7b6040940238033068045222afd0fc25482c5fda65cc6867c6aa991fed3&ipo=images")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Card>
    </a>
  );
}
