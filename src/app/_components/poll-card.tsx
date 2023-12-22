"use client";

import { useEffect, useState } from "react";
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
import { useVisitorSession } from "./hooks/useVisitorSession";
import { useToast } from "./ui/use-toast";

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
  const { session, editSession } = useVisitorSession();
  const { toast } = useToast();

  useEffect(() => {
    if (!session?.voting) {
      editSession({
        uid: "someid",
        voting: {
          isAllowed: true,
        },
      });
    }
  }, []);


    const updateVoteCount = (option: {
      percentage?: number;
      text: any;
      votes?: number;
      voted?: boolean;
    }) => {
      // If the user has already voted for this option, revert the vote
      if (option.voted) {
        const updatedOptions = options.map((currentOption) => {
          if (currentOption.text === option.text) {
            return { ...currentOption, votes: currentOption.votes - 1, voted: false };
          }
          return currentOption;
        });

        setOptions(updatedOptions);

        // Decrement the number of votes casted
        editSession({
          voting: {
            ...session?.voting,
            votesCasted: session?.voting?.votesCasted ?? 0 - 1,
          },
        });

        return;
      }

      // If the user has no votes left, return early
      if (!(session?.voting?.isAllowed) || (session.voting.votesCasted ?? 0) >= maxVotes) {
        toast({
          description: "You have no votes left",
        });

        return;
      }

      const updatedOptions = options.map((currentOption) => {
        if (currentOption.text === option.text) {
          const newVotes = currentOption.votes + 1;
          if (newVotes >= maxVotes) {
            setMaxVotes(newVotes + 1); // Increment max votes if an option reaches it
          }
          return { ...currentOption, votes: newVotes, voted: true };
        }
        return currentOption;
      });

      setOptions(updatedOptions);

      // Increment the number of votes casted
      editSession({
        voting: {
          ...session.voting,
          votesCasted: (session.voting.votesCasted ?? 0) + 1,
        },
      });
    };

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  return (
    <Card className={cn("w-full sm:w-[580px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Choose your game</CardTitle>
        <CardDescription>
          {session?.voting?.isAllowed
            ? `You have ${options.length - totalVotes} Votes Left`
            : "You have no votes left"}
        </CardDescription>
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
                  className="absolute flex h-full rounded-md bg-primary transition-all duration-500"
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
