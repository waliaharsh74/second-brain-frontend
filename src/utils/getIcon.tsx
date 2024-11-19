import { Note } from "@/types/types"
import { FileText, Twitter, Video } from "lucide-react"
export const getIcon = (type: Note["type"]) => {
    switch (type) {
        case "tweet":
            return <Twitter className="h-5 w-5" />
        case "video":
            return <Video className="h-5 w-5" />
        case "document":
            return <FileText className="h-5 w-5" />
        default:
            return <FileText className="h-5 w-5" />
    }
}