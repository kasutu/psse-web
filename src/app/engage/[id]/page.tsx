import PollCard from "@/components/poll-card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  ContentHeader,
  ContentHeaderAuthor,
  ContentHeaderDescription,
  ContentHeaderHeading,
  ContentHeaderImage,
} from "@/components/content-header";
const imgUrl =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felements-cover-images-0.imgix.net%2F3d788bcf-d92a-4d5e-85b9-bcbc3a69f3b2%3Fauto%3Dcompress%252Cformat%26fit%3Dmax%26w%3D710%26s%3D01fb205ae2f250c0a3d64febc1e71063&f=1&nofb=1&ipt=af77c7b6040940238033068045222afd0fc25482c5fda65cc6867c6aa991fed3&ipo=images";

export default function PollPage() {
  return (
    <div className="container">
      <ContentHeader className="relative space-y-2 py-3 md:py-4 lg:py-8">
        <ContentHeaderImage src={imgUrl} />
        <ContentHeaderHeading>
          Your Vote Counts! Decide the Next Gaming Challenge!
        </ContentHeaderHeading>
        <ContentHeaderDescription>
          Join the <strong>2024 PSSE Esports Tournament</strong>! Cast your vote
          and help us select the next big game for the competition.
        </ContentHeaderDescription>
        <ContentHeaderAuthor>
          <AuthorAvatar />
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <BookCheck className="h-4 w-4" />
            <span>April 6, 2023</span>
            {["Poll", "Esports"].map((value, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-muted-foreground"
              >
                {value}
              </Badge>
            ))}
          </div>
        </ContentHeaderAuthor>
      </ContentHeader>

      <div className="flex flex-col items-center justify-start lg:py-10">
        <PollCard />
      </div>
    </div>
  );
}

function AuthorAvatar() {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Avatar className="h-9 w-auto">
          <AvatarImage src="https://github.com/kasutu.png" alt="@dev_kasutu" />
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
    </>
  );
}
