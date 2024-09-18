"use server";

import kjv from "@/asset/en_kjv.json";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";

// Define a type for the structure of the data inside the JSON file
type Book = {
  name: string;
};

// Ensure that kjv is typed properly as an array of Book objects
async function getData(): Promise<string[]> {
  return (kjv as Book[]).map((book) => book.name);
}

const Home: React.FC = async () => {
  const data = await getData();
  return (
      <section className="container mx-auto p-4">
        <h1>King James Version</h1>

        <section className="flex flex-col gap-4">
          {data.map((book, index) => (
              <Link key={index}

                    href={"/1/1"}
                    className={cn(buttonVariants({variant: "ghost"}))}>
                {book}
              </Link>
          ))}
        </section>
      </section>
  );
};

export default Home;
