import {Bell, Bookmark, Edit, FileText, Heart, Image, MapPin, Sun, Users, Video} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Avatar, AvatarFallback} from "@/components/ui/avatar"
import {memo} from "react"

// Memoized menu item component for better performance
const MenuItem = memo(({ icon: Icon, children, onClick }: { 
  icon: React.ComponentType<{ className?: string }>; 
  children: React.ReactNode; 
  onClick?: () => void;
}) => (
  <Button 
    variant="ghost" 
    className="w-full justify-start text-lg transition-all duration-200 hover:bg-zinc-800 hover:translate-x-1"
    onClick={onClick}
  >
    <Icon className="h-6 w-6 mr-4"/>
    {children}
  </Button>
));

MenuItem.displayName = 'MenuItem';

// Memoized section divider
const SectionDivider = memo(() => (
  <div className="h-px bg-zinc-800 transition-colors duration-300"/>
));

SectionDivider.displayName = 'SectionDivider';

export default function MorePage() {
  return (
      <>
        <div className="flex justify-between items-center p-4 animate-in fade-in-0 duration-300">
          <h1 className="text-3xl font-bold">More</h1>
          <Button variant="secondary" size="sm" className="bg-zinc-800 text-white transition-all duration-200 hover:bg-zinc-700 hover:scale-105">
            <Heart className="h-4 w-4 mr-2"/>
            Give Now
          </Button>
        </div>

        <div className="flex-grow overflow-auto px-4 will-change-scroll">
          <div className="flex items-center space-x-4 mb-6 animate-in slide-in-from-left-5 duration-500">
            <Avatar className="h-12 w-12 bg-zinc-800 transition-all duration-300 hover:scale-110">
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span className="text-xl">Aurelius Ivan Wijaya</span>
          </div>

          <div className="space-y-6 animate-in slide-in-from-bottom-3 duration-700">
            <div className="space-y-2">
              <MenuItem icon={Bell}>Notifications</MenuItem>
              <MenuItem icon={Users}>Friends</MenuItem>
            </div>

            <SectionDivider />

            <div className="space-y-2">
              <MenuItem icon={Sun}>Verse of the Day</MenuItem>
              <MenuItem icon={MapPin}>Prayer</MenuItem>
              <MenuItem icon={Video}>Videos</MenuItem>
              <MenuItem icon={MapPin}>Events</MenuItem>
            </div>

            <SectionDivider />

            <div className="space-y-2">
              <MenuItem icon={Edit}>Highlights</MenuItem>
              <MenuItem icon={Bookmark}>Bookmarks</MenuItem>
              <MenuItem icon={Image}>Images</MenuItem>
              <MenuItem icon={FileText}>Notes</MenuItem>
            </div>
          </div>
        </div>
      </>
  )
}