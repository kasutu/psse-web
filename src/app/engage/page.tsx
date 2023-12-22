import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookCheck } from "lucide-react";

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
      <Card>
        <CardHeader className="grid w-[690px] grid-cols-3 items-start gap-4 space-y-0">
          <div className="col-span-2 space-y-3">
            {/* User avatar */}
            <div className="flex items-center space-x-4">
              <Avatar className="h-7 w-auto">
                <AvatarImage
                  src="https://github.com/kasutu.png"
                  alt="@dev_kasutu"
                />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold leading-none">
                  Jerome Cabugwason
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  Business Manager
                </p>
              </div>
            </div>
            <CardTitle className="font-bold">
              Your Vote Counts! Decide the Next Gaming Challenge!
            </CardTitle>
            <CardDescription>
              Join the <strong>2024 PSSE Esports Tournament</strong>! Cast your
              vote and help us select the next big game for the competition.
            </CardDescription>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              className="object-cover"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felements-cover-images-0.imgix.net%2F3d788bcf-d92a-4d5e-85b9-bcbc3a69f3b2%3Fauto%3Dcompress%252Cformat%26fit%3Dmax%26w%3D710%26s%3D01fb205ae2f250c0a3d64febc1e71063&f=1&nofb=1&ipt=af77c7b6040940238033068045222afd0fc25482c5fda65cc6867c6aa991fed3&ipo=images"
              alt="bg image"
            />
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <BookCheck className="h-4 w-4" />
            <span>April 6, 2023</span>
            {["Poll", "Esports"].map((value) => (
              <Badge variant="outline" className="text-muted-foreground">
                {value}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
