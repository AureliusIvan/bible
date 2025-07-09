"use client";

import {useState, useCallback, memo} from 'react'
import {ArrowLeft, ChevronDown, Clock, Search} from 'lucide-react'
import {Button, buttonVariants} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import Link from "next/link";
import {cn} from "@/lib/utils";
import {bibleBooks} from "@/asset/bookList";

// Memoized chapter component for better performance
const ChapterButton = memo(({ bookIndex, chapter }: { bookIndex: number; chapter: number }) => (
  <Link
    href={`/chapter/${bookIndex}/${chapter}`}
    className={cn(`text-center py-1 rounded-md transition-colors duration-200 hover:bg-zinc-700`, buttonVariants({variant: 'ghost'}))}
  >
    {chapter}
  </Link>
));

ChapterButton.displayName = 'ChapterButton';

// Memoized book component for better performance
const BookItem = memo(({ 
  book, 
  bookIndex, 
  isExpanded, 
  onToggle 
}: { 
  book: typeof bibleBooks[0]; 
  bookIndex: number; 
  isExpanded: boolean; 
  onToggle: (bookName: string) => void;
}) => (
  <div className="mb-4">
    <Button
      variant="ghost"
      className="w-full justify-between text-left text-lg font-semibold py-2 transition-colors duration-200 hover:bg-zinc-800"
      onClick={() => onToggle(book.name)}
    >
      {book.name}
      <div className={cn("transition-transform duration-300", isExpanded ? "rotate-180" : "")}>
        <ChevronDown className="h-5 w-5"/>
      </div>
    </Button>
    <div className={cn(
      "overflow-hidden transition-all duration-300 ease-in-out",
      isExpanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
    )}>
      <div className="grid grid-cols-6 gap-2">
        {Array.from({length: book.chapters}, (_, i) => i + 1).map((chapter) => (
          <ChapterButton key={chapter} bookIndex={bookIndex} chapter={chapter} />
        ))}
      </div>
    </div>
  </div>
));

BookItem.displayName = 'BookItem';

export default function BookPage() {
  const [expandedBook, setExpandedBook] = useState<string | null>(null);

  const toggleBook = useCallback((bookName: string) => {
    setExpandedBook(expandedBook === bookName ? null : bookName)
  }, [expandedBook]);

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
                className="w-full bg-zinc-800 border-none pl-10 text-white placeholder-gray-400 transition-all duration-200 focus:bg-zinc-700"
            />
          </div>
        </div>

        {/* Bible books list */}
        <div className="flex-grow overflow-auto px-4 will-change-scroll">
          {bibleBooks.map((book, bookIndex) => (
              <BookItem 
                key={book.name} 
                book={book} 
                bookIndex={bookIndex} 
                isExpanded={expandedBook === book.name}
                onToggle={toggleBook}
              />
          ))}
        </div>
      </div>
  )
}
