import {
  Book,
  ChevronLeft,
  ChevronRight,
  Compass,
  Globe,
  Home,
  ListChecks,
  Menu,
  Play,
  Search,
  Type,
  Volume2
} from "lucide-react"
import {Button} from "@/components/ui/button"

export default function Component() {
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
            NLT
          </Button>
        </div>

        {/* Main content */}
        <div className="flex-grow overflow-auto px-6 pb-20">
          <h1 className="text-3xl font-semibold mb-2 text-gray-400">Song of Songs</h1>
          <div className="text-8xl font-bold mb-6">3</div>
          <h2 className="text-xl italic mb-4">Young Woman</h2>
          <p className="mb-4 text-lg leading-relaxed">
            <sup className="text-gray-500 mr-1">1</sup>
            One night as I lay in bed, I yearned for my lover.
            I yearned for him, but he did not come.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            <sup className="text-gray-500 mr-1">2</sup>
            So I said to myself, `I will get up and roam the city,
            searching in all its streets and squares.
            I will search for the one I love.`
            So I searched everywhere but did
          </p>
        </div>

        {/* Bottom navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900">
          <div className="flex justify-between items-center px-4 py-2 border-b border-zinc-800">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-6 w-6"/>
            </Button>
            <span className="text-sm font-medium">Song of Songs 3</span>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-6 w-6"/>
            </Button>
            <Button variant="ghost" size="icon">
              <Play className="h-6 w-6"/>
            </Button>
          </div>
          <div className="flex justify-between px-4 py-2">
            <Button variant="ghost" className="flex flex-col items-center">
              <Home className="h-5 w-5"/>
              <span className="text-xs mt-1">Home</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center">
              <Book className="h-5 w-5"/>
              <span className="text-xs mt-1">Bible</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center">
              <ListChecks className="h-5 w-5"/>
              <span className="text-xs mt-1">Plans</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center">
              <Compass className="h-5 w-5"/>
              <span className="text-xs mt-1">Discover</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center">
              <Menu className="h-5 w-5"/>
              <span className="text-xs mt-1">More</span>
            </Button>
          </div>
        </div>
      </div>
  )
}