import type {Metadata} from "next";

import React from "react";
import {buttonVariants} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";


export const metadata: Metadata = {
  title: "Bible App",
  description: "Read the Bible with smooth transitions and performance",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className={`flex flex-col h-screen bg-black text-white font-sans overflow-hidden`}>

        <div className="flex-1 overflow-hidden">
          {children}
        </div>

        {/* Bottom navigation */}
        <div className="fixed justify-between items-center p-4 bg-zinc-900/95 backdrop-blur-md w-full flex bottom-0 border-t border-zinc-800 will-change-transform">

          <Link
              href={`/`}
              className={
                cn(`flex flex-col items-center transition-all duration-200 hover:scale-105 hover:bg-zinc-800`,
                    buttonVariants({variant: 'ghost'}))
              }
          >
            <Menu className="h-6 w-6"/>
            <span className="text-xs mt-1">Home</span>
          </Link>

          <Link
              href={`/book`}
              className={
                cn(`flex flex-col items-center transition-all duration-200 hover:scale-105 hover:bg-zinc-800`,
                    buttonVariants({variant: 'ghost'}))
              }
          >
            <Menu className="h-6 w-6"/>
            <span className="text-xs mt-1">Bible</span>
          </Link>


          <Link
              href={`/more`}
              className={
                cn(`flex flex-col items-center transition-all duration-200 hover:scale-105 hover:bg-zinc-800`,
                    buttonVariants({variant: 'ghost'}))
              }
          >
            <Menu className="h-6 w-6"/>
            <span className="text-xs mt-1">More</span>
          </Link>
        </div>
      </section>
  );
}
