import {Bell, Heart, MoreHorizontal, Share2, X, Zap} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link";

export default function HomePage() {
  return (
      <>
        {/* Top navigation */}
        <div className="flex justify-between items-center p-4">
          <div className="flex space-x-4">
            <span className="font-semibold">Today</span>
            <span className="text-gray-400">Community</span>
          </div>

          <div className="flex items-center space-x-4">
            <Zap className="h-5 w-5"/>
            <span className="font-semibold">3</span>
            <Bell className="h-5 w-5"/>

            <Link
                href="/profile"
                className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
              <span className="font-semibold">A</span>
            </Link>

          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow overflow-auto px-4">
          {/* Bible translation card */}
          <Card className="bg-zinc-900 mb-6">
            <CardContent className="p-4 flex">
              <div className="w-1/3 bg-zinc-800 rounded-lg mr-4"></div>
              <div className="w-2/3">
                <h2 className="text-xl font-bold mb-2">What if the Bible didn`t exist in your...</h2>
                <p className="text-sm text-gray-300">
                  There are people around the world still waiting for a Bible in their language. You can help us change
                  that.
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-sm text-blue-400">Give to Bible Translation</span>
              <X className="h-5 w-5 text-gray-400"/>
            </CardFooter>
          </Card>

          {/* Daily Refresh section */}
          <h2 className="text-2xl font-bold mb-4">Daily Refresh</h2>
          <Card className="bg-gradient-to-br from-amber-700 to-amber-900 mb-6">
            <CardContent className="p-6">
              <div className="mb-4">
                <span className="text-sm font-semibold">Verse of the Day</span>
                <h3 className="text-xl font-bold">Ephesians 4:29 NLT</h3>
              </div>
              <p className="text-2xl font-serif mb-4">
                Don`t use foul or abusive language. Let everything you say be good and helpful, so that your words will
                be an encouragement to those who hear them.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-5 w-5 mr-2"/>
                    <span>518.7k</span>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-5 w-5 mr-2"/>
                    <span>237k</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-5 w-5"/>
                  <span className="ml-2">More</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Guided Scripture section (partially visible) */}
          <Card className="bg-zinc-900 mb-6">
            <CardContent className="p-4 flex items-center">
              <div className="flex-grow">
                <span className="text-sm text-gray-400">Guided Scripture</span>
                <h3 className="text-lg font-semibold">Cultivate a rhythm of...</h3>
              </div>
              <Image
                  src="/placeholder.svg"
                  width={50}
                  height={50}
                  alt="Profile"
                  className="rounded-full"
              />
            </CardContent>
          </Card>
        </div>
      </>
  )
}