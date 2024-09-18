"use server";

import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export default async function Home() {
  return (
      <section
          className={"container mx-auto p-4"}
      >

        <h1
            className={`text-4xl font-bold`}
        >
          Welcome to Bible App
        </h1>

        <Link
            className={buttonVariants({variant: "ghost"})}
            href={"/book"}
        >
          KJV
        </Link>

      </section>
  );
}
