"use client";

import { useState } from "react";
import { usePoll } from "@/components/hooks/usePoll";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/styles";
import { Button } from "./ui/button";

type CardProps = React.ComponentProps<typeof Card>;

export default function PollCard({ className, ...props }: CardProps) {
  const initialOptions = [
    { text: "Valorant", votes: 0 },
    { text: "Tetr.io", votes: 0 },
    { text: "Teamfight Tactics", votes: 0 },
    { text: "Mobile Legends", votes: 0 },
    { text: "League of Legends", votes: 0 },
    { text: "Capture the flag (coding)", votes: 0 },
    { text: "Mini Militia", votes: 0 },
    { text: "The Finals", votes: 0 },
  ];

  const { options, setOptions } = usePoll([...initialOptions]);
  const [maxVotes, setMaxVotes] = useState(10); // Set initial max votes to 10

  const updateVoteCount = (option: {
    percentage?: number;
    text: any;
    votes?: number;
  }) => {
    const updatedOptions = options.map((currentOption) => {
      if (currentOption.text === option.text) {
        const newVotes = currentOption.votes + 1;
        if (newVotes >= maxVotes) {
          setMaxVotes(newVotes + 1); // Increment max votes if an option reaches it
        }
        return { ...currentOption, votes: newVotes };
      }
      return currentOption;
    });

    setOptions(updatedOptions);
  };

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  return (
    <Card className={cn("w-[580px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Poll</CardTitle>
        <CardDescription>You have 1 vote each</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="cursor-pointer">
          {options.map((option, index) => (
            <div
              key={index}
              className="mb-2"
              onClick={() => updateVoteCount(option)}
            >
              <div className="relative flex rounded-md bg-secondary">
                <div
                  style={{
                    width: `${Math.min((option.votes / maxVotes) * 100, 100)}%`,
                  }}
                  className="absolute flex h-full rounded-md bg-primary"
                />
                <div className="z-10 flex w-full select-none flex-row place-content-between p-2 font-semibold">
                  <span>{option.text}</span>
                  <span>{option.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex select-none flex-col">
          <span className="font-semibold">Total Votes</span>
          <span className="text-3xl font-bold">{totalVotes}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
