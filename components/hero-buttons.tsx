"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";

interface HeroButtonsProps {
  variant?: "hero" | "cta";
}

export function HeroButtons({ variant = "hero" }: HeroButtonsProps) {
  const { openSignUp, openSignIn } = useClerk();

  if (variant === "cta") {
    return (
      <Button size="lg" className="gap-2" onClick={() => openSignUp()}>
        Create your account
        <ArrowRight weight="bold" className="size-4" />
      </Button>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="lg" className="gap-2" onClick={() => openSignUp()}>
        Get started free
        <ArrowRight weight="bold" className="size-4" />
      </Button>
      <Button size="lg" variant="outline" onClick={() => openSignIn()}>
        Sign in
      </Button>
    </div>
  );
}
