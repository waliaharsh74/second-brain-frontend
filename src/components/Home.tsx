import * as React from "react"
import { FileText, Hash, Link2, Twitter, Video } from 'lucide-react'
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Note } from '../types/types'
import Navbar from "./Navbar"
import CardComponent from "./CardComponent"


export default function Component() {
    const [isSidebarOpen, setSidebarOpen] = React.useState(true)
    const [notes, setNotes] = React.useState<Note[]>([
        {
            id: "1",
            title: "Project Ideas",
            content: "Future Projects\n• Build a personal knowledge base\n• Create a habit tracker\n• Design a minimalist todo app",
            type: "document",
            tags: ["productivity", "ideas"],
            date: "10/03/2024"
        },
        {
            id: "2",
            title: "How to Build a Second Brain",
            content: "",
            type: "video",
            tags: ["productivity", "learning"],
            date: "09/03/2024"
        },
        {
            id: "3",
            title: "Productivity Tip",
            content: "The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.",
            type: "text",
            tags: ["productivity", "learning"],
            date: "08/03/2024"
        }
    ])

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)



    return (
        <div className="flex min-h-screen bg-background">
            <div
                className={cn(
                    "border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                    "fixed left-0 top-0 z-30 h-screen w-[240px] transition-transform duration-300",
                    !isSidebarOpen && "-translate-x-full"
                )}
            >
                <div className="flex h-14 items-center border-b px-4">
                    <span className="flex items-center gap-2 font-semibold">
                        <div className="h-6 w-6 rounded-full bg-primary" />
                        Second Brain
                    </span>
                </div>
                <nav className="space-y-1 p-4">
                    {[
                        { icon: Twitter, label: "Tweets" },
                        { icon: Video, label: "Videos" },
                        { icon: FileText, label: "Documents" },
                        { icon: Link2, label: "Links" },
                        { icon: Hash, label: "Tags" },
                    ].map((item) => (
                        <Button
                            key={item.label}
                            variant="ghost"
                            className="w-full justify-start gap-2"
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Button>
                    ))}
                </nav>
            </div>

            <div className={cn(
                "flex-1 transition-all duration-300",
                isSidebarOpen ? "ml-[240px]" : "ml-0"
            )}>
                <Navbar toggleSidebar={toggleSidebar} notes={notes} />

                <main className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {notes.map((note) => (
                        <CardComponent key={note.id} note={note} />
                    ))}
                </main>
            </div>
        </div>
    )
}