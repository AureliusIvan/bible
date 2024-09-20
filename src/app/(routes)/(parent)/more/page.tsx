import {Bell, Bookmark, Edit, FileText, Heart, Image, MapPin, Sun, Users, Video} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Avatar, AvatarFallback} from "@/components/ui/avatar"

export default function Component() {
  return (
      <>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-3xl font-bold">More</h1>
          <Button variant="secondary" size="sm" className="bg-zinc-800 text-white">
            <Heart className="h-4 w-4 mr-2"/>
            Give Now
          </Button>
        </div>

        <div className="flex-grow overflow-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="h-12 w-12 bg-zinc-800">
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span className="text-xl">Aurelius Ivan Wijaya</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-lg">
                <Bell className="h-6 w-6 mr-4"/>
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start text-lg">
                <Users className="h-6 w-6 mr-4"/>
                Friends
              </Button>
            </div>

            <div className="h-px bg-zinc-800"/>

            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-lg">
                <Sun className="h-6 w-6 mr-4"/>
                Verse of the Day
              </Button>
              <Button variant="ghost" className="w-full justify-start text-lg">
                {/*<PrayingHands className="h-6 w-6 mr-4"/>*/}
                Prayer
              </Button>
              <Button variant="ghost" className="w-full justify-start text-lg">
                <Video className="h-6 w-6 mr-4"/>
                Videos
              </Button>
              <Button variant="ghost" className="w-full justify-start text-lg">
                <MapPin className="h-6 w-6 mr-4"/>
                Events
              </Button>
            </div>

            <div className="h-px bg-zinc-800"/>

            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-lg">
                <Edit className="h-6 w-6 mr-4"/>
                Highlights
              </Button>
              <Button variant="ghost" className="w-full justify-start text-lg">
                <Bookmark className="h-6 w-6 mr-4"/>
                Bookmarks
              </Button>
              <Button variant="ghost" className="w-full justify-start text-lg">
                <Image className="h-6 w-6 mr-4" />
                Images
              </Button>
              <Button variant="ghost" className="w-full justify-start text-lg">
                <FileText className="h-6 w-6 mr-4"/>
                Notes
              </Button>
            </div>
          </div>
        </div>
      </>
  )
}