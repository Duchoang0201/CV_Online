"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface props {
  children?: ReactNode;
}

export default function Provider({ children }: props) {
  return (
    <ThemeProvider
      themes={["light", "dark"]}
      storageKey="theme"
      defaultTheme="light"
      attribute="class"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}
