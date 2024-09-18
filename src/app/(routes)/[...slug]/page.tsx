"use server";

import type {Bible} from "@/interface/kjv";
import kjv from "@/asset/en_kjv.json"

const bibleData: Bible = kjv as unknown as Bible;

async function getData(book: number, chapter: number) {
  const data = bibleData.map((verse: never) => verse);
  const genesis = data[book]

  // convert chapter to integer
  if (chapter === 0) {
    chapter = 1
  }

  // TODO: add fallback, so even tho params not match, error will not occurs
  return genesis.chapters[chapter - 1 || 0]
}

export default async function Home({params}: { params: { slug: ["book", "chapter"] } }) {
  const chapter = await getData(parseInt(params.slug[0]), parseInt(params.slug[1]));
  return (
      <section
          className={"container mx-auto p-4"}
      >

        <h1 className={`text-xl`}>
          Genesis {params.slug[0]} - {params.slug[1]}

        </h1>

        {chapter.map((book: string, index: number) => (
            <p key={index}
               className={`whitespace-nowrap`}
            >
              <span
                  className={'opacity-35'}
              >
              {index + 1}
              </span>
              {" "}{book}
            </p>
        ))}

      </section>
  );
}
