"use client";

import {useState} from 'react'
import {ArrowLeft, ChevronDown, ChevronUp, Clock, Search} from 'lucide-react'
import {Button, buttonVariants} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import Link from "next/link";
import {cn} from "@/lib/utils";
import {bibleBooks} from "@/asset/bookList";

export default function BookPage() {
  const [expandedBook, setExpandedBook] = useState<string | null>(null);

  const toggleBook = (bookName: string) => {
    setExpandedBook(expandedBook === bookName ? null : bookName)
  }

  return (
      <div className="flex flex-col h-screen bg-black text-white font-sans">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <Link className={cn(`flex flex-col items-center`, buttonVariants({variant: 'ghost'}))} href={`/`}>
            <ArrowLeft className="h-6 w-6"/>
          </Link>
          <h1 className="text-xl font-semibold">References</h1>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              {/*<SortAZ className="h-6 w-6" />*/} Sort
            </Button>
            <Button variant="ghost" size="icon">
              <Clock className="h-6 w-6"/>
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <div className="px-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
            <Input
                type="text"
                placeholder="Search"
                className="w-full bg-zinc-800 border-none pl-10 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Bible books list */}
        <div className="flex-grow overflow-auto px-4">
          {bibleBooks.map((book, bookIndex) => (
              <div key={book.name} className="mb-4">
                <Button
                    variant="ghost"
                    className="w-full justify-between text-left text-lg font-semibold py-2"
                    onClick={() => toggleBook(book.name)}
                >
                  {book.name}
                  {expandedBook === book.name ? (
                      <ChevronUp className="h-5 w-5"/>
                  ) : (
                      <ChevronDown className="h-5 w-5"/>
                  )}
                </Button>
                {expandedBook === book.name && (
                    <div className="grid grid-cols-6 gap-2 mt-2">
                      {Array.from({length: book.chapters}, (_, i) => i + 1).map((chapter) => (
                          <Link
                              href={`/chapter/${bookIndex}/${chapter}`}
                              className={cn(`text-center py-1 rounded-md`, buttonVariants({variant: 'ghost'}))}
                              key={chapter}
                          >
                            {chapter}
                          </Link>
                      ))}
                    </div>
                )}
              </div>
          ))}
        </div>
      </div>
  )
}
