"use server";

import {ChevronLeft, ChevronRight, Globe, Play, Search, Type, Volume2} from "lucide-react"
import {Button} from "@/components/ui/button";
import type {Bible, Book} from "@/interface/kjv";
import kjv from "@/asset/en_kjv.json"
import {bibleBooks} from "@/asset/bookList";
import Link from "next/link";

const bibleData: Bible = kjv as unknown as Bible;

async function getBibleData(
    book: number,
    chapter: number) {
  // convert bibleData to array
  const _book: Book = bibleData[book]

  // convert chapter to integer
  if (chapter <= 0 || chapter > _book.chapters.length) {
    chapter = 1
  }

  return _book.chapters[chapter - 1 || 0] as unknown as string[]
}

export default async function ChapterPage({params}: { params: { slug: ["book", "chapter", "verse"] } }) {
  const book: number = parseInt(params.slug[0])
  const chapter: number = parseInt(params.slug[1])
  const bookTitle: string = bibleBooks[book].name
  const verseList: string[] = await getBibleData(book, chapter)

  return (
      <div className="flex flex-col h-screen bg-black text-white font-sans">
        {/* Top bar */}
        <div className="flex justify-end space-x-4 p-4">
          <Button variant="ghost" size="icon">
            <Volume2 className="h-6 w-6"/>
          </Button>
          <Button variant="ghost" size="icon">
            <Type className="h-6 w-6 font-bold"/>
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6"/>
          </Button>
          <Button variant="secondary" className="rounded-full px-3 py-1 text-sm font-semibold">
            <Globe className="h-4 w-4 mr-2 inline"/>
            KJV
          </Button>
        </div>

        {/* Main content */}
        <div className="flex-grow overflow-auto px-6 pb-20">
          <h1 className="text-3xl font-semibold mb-2 text-gray-400">{bookTitle}</h1>
          <div className="text-8xl font-bold mb-6">{chapter}</div>
          {
            verseList.map((verse: string, index: number) => (
                <p key={index} className="mb-4 text-lg leading-relaxed">
                  <sup className="text-gray-500 mr-1">{index + 1}</sup>
                  {verse}
                </p>
            ))
          }
        </div>

        {/* Bottom navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900">
          <div className="flex justify-between items-center px-4 py-2 border-b border-zinc-800">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-6 w-6"/>
            </Button>

            <Link
                href={`/book`}
                className="text-sm font-medium">
              {bookTitle}{" "}{chapter}
            </Link>

            <Button variant="ghost" size="icon">
              <ChevronRight className="h-6 w-6"/>
            </Button>
            <Button variant="ghost" size="icon">
              <Play className="h-6 w-6"/>
            </Button>
          </div>
        </div>
      </div>
  )
}