import {ArrowLeft, Award, Bookmark, Clock, Edit, FileText, Image, MoreVertical, Users, Zap} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Avatar, AvatarFallback} from "@/components/ui/avatar"

export default function ProfilePage() {
  return (
      <div className="flex flex-col h-screen bg-black text-white font-sans">
        <div className="flex justify-between items-center p-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6"/>
          </Button>
          <h1 className="text-xl font-semibold">Aurelius Ivan Wijaya</h1>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-6 w-6"/>
          </Button>
        </div>

        <div className="flex flex-col items-center mt-8 mb-12">
          <Avatar className="h-24 w-24 bg-zinc-800 mb-4">
            <AvatarFallback className="text-4xl">A</AvatarFallback>
          </Avatar>
          <div className="bg-zinc-800 rounded-full px-3 py-1 flex items-center">
            <Zap className="h-4 w-4 mr-1"/>
            <span className="text-sm font-medium">3</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 px-6">
          <Button variant="ghost" className="flex flex-col items-center h-24 justify-center">
            <Bookmark className="h-8 w-8 mb-2"/>
            <span>Bookmarks</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-24 justify-center">
            <Image className="h-8 w-8 mb-2"/>
            <span>Images</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-24 justify-center">
            <FileText className="h-8 w-8 mb-2"/>
            <span>Notes</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-24 justify-center">
            <Edit className="h-8 w-8 mb-2"/>
            <span>Highlights</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-24 justify-center">
            <Users className="h-8 w-8 mb-2"/>
            <span>Friends</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-24 justify-center">
            <Award className="h-8 w-8 mb-2"/>
            <span>Badges</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-24 justify-center">
            {/*<PrayingHands className="h-8 w-8 mb-2"/>*/}
            <span>Pray</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center h-24 justify-center">
            <Clock className="h-8 w-8 mb-2"/>
            <span>History</span>
          </Button>
        </div>
      </div>
  )
}