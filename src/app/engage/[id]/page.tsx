import PollCard from "@/components/poll-card";
import { Button } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PollPage() {
  return (
    <div className="container">
      <PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
        <PageHeaderHeading>
          Your Vote Counts! Decide the Next Gaming Challenge!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Join the <strong>Ninjas Esports Tournament</strong>! Cast your vote
          and help us select the next big game for the competition.
        </PageHeaderDescription>
      </PageHeader>
      <div className="flex flex-col items-center justify-start">
        <PollCard />
      </div>
    </div>
  );
}
