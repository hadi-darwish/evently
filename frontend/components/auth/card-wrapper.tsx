"use client";

import { CSSProperties } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = false,
  className = "",
  style = {},
}: CardWrapperProps) => {
  return (
    <Card
      className={`w-[400px] shadow-md ${className}`}
      style={{
        ...style,
        overflowY: "auto",
        maxHeight: "100%",
        scrollbarWidth: "none" /* Hide scrollbar for Firefox */,
        msOverflowStyle:
          "none" /* Hide scrollbar for Internet Explorer and Edge */,
      }}
    >
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
