import { Skeleton } from "@/components/ui/skeleton"
import { memo } from "react"

export const BookListSkeleton = memo(() => (
  <div className="space-y-4 px-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="space-y-2">
        <Skeleton className="h-12 w-full rounded-md" />
        {i % 3 === 0 && (
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 12 }).map((_, j) => (
              <Skeleton key={j} className="h-8 rounded-md" />
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
))

BookListSkeleton.displayName = 'BookListSkeleton'

export const CardSkeleton = memo(() => (
  <div className="space-y-4 px-4">
    <Skeleton className="h-32 w-full rounded-lg" />
    <Skeleton className="h-48 w-full rounded-lg" />
    <Skeleton className="h-24 w-full rounded-lg" />
  </div>
))

CardSkeleton.displayName = 'CardSkeleton'

export const MenuSkeleton = memo(() => (
  <div className="space-y-4 px-4">
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-6 w-48" />
    </div>
    <div className="space-y-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full rounded-md" />
      ))}
    </div>
  </div>
))

MenuSkeleton.displayName = 'MenuSkeleton'