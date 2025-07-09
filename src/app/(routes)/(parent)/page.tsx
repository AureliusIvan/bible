import {Bell, Heart, MoreHorizontal, Share2, X, Zap} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link";
import {memo} from "react";

// Memoized navigation component
const TopNavigation = memo(() => (
  <div className="flex justify-between items-center p-4 animate-in fade-in-0 duration-300">
    <div className="flex space-x-4">
      <span className="font-semibold transition-colors duration-200 hover:text-blue-400">Today</span>
      <span className="text-gray-400 transition-colors duration-200 hover:text-gray-300">Community</span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 transition-all duration-200 hover:scale-105">
        <Zap className="h-5 w-5 text-yellow-400"/>
        <span className="font-semibold">3</span>
      </div>
      <Button variant="ghost" size="icon" className="transition-all duration-200 hover:bg-zinc-800">
        <Bell className="h-5 w-5"/>
      </Button>

      <Link
          href="/profile"
          className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-200 hover:scale-110">
        <span className="font-semibold">A</span>
      </Link>
    </div>
  </div>
));

TopNavigation.displayName = 'TopNavigation';

// Memoized verse card component
const VerseCard = memo(() => (
  <Card className="bg-gradient-to-br from-amber-700 to-amber-900 mb-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] will-change-transform">
    <CardContent className="p-6">
      <div className="mb-4">
        <span className="text-sm font-semibold">Verse of the Day</span>
        <h3 className="text-xl font-bold">Ephesians 4:29 NLT</h3>
      </div>
      <p className="text-2xl font-serif mb-4 leading-relaxed">
        Don`t use foul or abusive language. Let everything you say be good and helpful, so that your words will
        be an encouragement to those who hear them.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="transition-all duration-200 hover:bg-white/10 hover:scale-105">
            <Heart className="h-5 w-5 mr-2"/>
            <span>518.7k</span>
          </Button>
          <Button variant="ghost" size="sm" className="transition-all duration-200 hover:bg-white/10 hover:scale-105">
            <Share2 className="h-5 w-5 mr-2"/>
            <span>237k</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="transition-all duration-200 hover:bg-white/10">
          <MoreHorizontal className="h-5 w-5"/>
          <span className="ml-2">More</span>
        </Button>
      </div>
    </CardContent>
  </Card>
));

VerseCard.displayName = 'VerseCard';

export default function HomePage() {
  return (
      <>
        <TopNavigation />

        {/* Main content */}
        <div className="flex-grow overflow-auto px-4 will-change-scroll">
          {/* Bible translation card */}
          <Card className="bg-zinc-900 mb-6 animate-in slide-in-from-left-3 duration-500 transition-all hover:bg-zinc-800">
            <CardContent className="p-4 flex">
              <div className="w-1/3 bg-zinc-800 rounded-lg mr-4 transition-colors duration-300 hover:bg-zinc-700"></div>
              <div className="w-2/3">
                <h2 className="text-xl font-bold mb-2">What if the Bible didn`t exist in your...</h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  There are people around the world still waiting for a Bible in their language. You can help us change
                  that.
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-sm text-blue-400 transition-colors duration-200 hover:text-blue-300">Give to Bible Translation</span>
              <Button variant="ghost" size="icon" className="transition-all duration-200 hover:bg-zinc-800 hover:rotate-90">
                <X className="h-5 w-5 text-gray-400"/>
              </Button>
            </CardFooter>
          </Card>

          {/* Daily Refresh section */}
          <div className="animate-in slide-in-from-bottom-3 duration-700">
            <h2 className="text-2xl font-bold mb-4">Daily Refresh</h2>
            <VerseCard />
          </div>

          {/* Guided Scripture section */}
          <Card className="bg-zinc-900 mb-6 animate-in slide-in-from-right-3 duration-500 delay-200 transition-all hover:bg-zinc-800">
            <CardContent className="p-4 flex items-center">
              <div className="flex-grow">
                <span className="text-sm text-gray-400">Guided Scripture</span>
                <h3 className="text-lg font-semibold">Cultivate a rhythm of...</h3>
              </div>
              <div className="relative w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Image
                    src="/placeholder.svg"
                    width={50}
                    height={50}
                    alt="Guided Scripture"
                    className="rounded-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </>
  )
}