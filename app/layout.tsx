import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";

import "@fontsource-variable/inter";

import { siteConfig } from "@/config";

import { ThemeProvider } from "./provider";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000319",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
