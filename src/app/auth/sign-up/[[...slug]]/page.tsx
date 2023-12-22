"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Page() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(false);
        router.back();
      }}
    >
      <DialogContent className="place-content-center rounded-lg bg-primary-foreground">
        <SignUp />
      </DialogContent>
    </Dialog>
  );
}
