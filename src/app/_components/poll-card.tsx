"use client";

import { useState } from "react";
import { Option, usePoll } from "@/components/hooks/usePoll";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/styles";
import { Countdown } from "./countdown";
import { Link, Share2 } from "lucide-react";
import { Button } from "./ui/button";

type CardProps = React.ComponentProps<typeof Card>;

const initialOptions: Option[] = [
  { id: "someid1", voted: false, text: "Valorant", votes: 0 },
  { id: "someid2", voted: false, text: "Tetr.io", votes: 0 },
  { id: "someid3", voted: false, text: "Teamfight Tactics", votes: 0 },
  { id: "someid4", voted: false, text: "Mobile Legends", votes: 0 },
  { id: "someid5", voted: false, text: "League of Legends", votes: 0 },
  { id: "someid6", voted: false, text: "Capture the flag (coding)", votes: 0 },
  { id: "someid7", voted: false, text: "Mini Militia", votes: 0 },
  { id: "someid8", voted: false, text: "The Finals", votes: 0 },
  { id: "someid9", voted: false, text: "Apex Legends", votes: 0 },
];

export default function PollCard({ className, ...props }: CardProps) {
  const { options, setOptions } = usePoll([...initialOptions]);
  const [maxVotes, setMaxVotes] = useState(10); // Set initial max votes to 10

  const castVote = (optionId: string) => {
    const updatedOptions = options.map((currentOption) => {
      if (currentOption.id === optionId && !currentOption.voted) {
        return {
          ...currentOption,
          votes: currentOption.votes + 1,
          voted: true,
        };
      }
      return currentOption;
    });

    setOptions(updatedOptions);
  };

  const retractVote = (optionId: string) => {
    const updatedOptions = options.map((currentOption) => {
      if (currentOption.id === optionId && currentOption.voted) {
        return {
          ...currentOption,
          votes: currentOption.votes - 1,
          voted: false,
        };
      }
      return currentOption;
    });

    setOptions(updatedOptions);
  };

  const updateVoteCount = (optionId: string) => {
    const option = options.find((option) => option.id === optionId);
    if (option) {
      if (option.voted) {
        retractVote(optionId);
      } else {
        castVote(optionId);
      }
    }
  };

  return (
    <Card className={cn("sm:w-full lg:w-[580px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Choose your game</CardTitle>
        <CardDescription>
          Select the game you want to play or watch in the upcoming tournament.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="cursor-pointer">
          {options.map((option, index) => (
            <div
              key={index}
              className="mb-2"
              onClick={() => updateVoteCount(option.id)}
            >
              <div className="relative flex w-full overflow-hidden rounded-lg  bg-clip-border outline outline-1 outline-secondary">
                <div className="z-10 flex w-full select-none flex-row place-content-between bg-transparent bg-clip-text px-2 py-3 text-sm font-bold ">
                  <span>{option.text}</span>
                  <span>{option.percentage}%</span>
                </div>
                <div
                  style={{
                    width: `${option.percentage}%`,
                  }}
                  className="absolute flex h-full bg-primary/50 transition-all duration-500 dark:bg-primary "
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <CardDescription className="flex h-full w-full flex-row place-content-between">
          <Countdown
            className="flex grow flex-row items-center"
            utc="2023-12-31T00:00:00Z"
          />
          <Button variant={"ghost"} onClick={() => console.log("clicked")}>
            <Link className="h-5 w-auto text-primary" />
          </Button>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
