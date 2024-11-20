import * as React from "react"
import { Copy, FileText, Hash, Link2, Share2, Twitter, Youtube } from 'lucide-react'
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Note } from '../types/types'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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
            date: "09/03/2024",
            link: "https://www.youtube.com/watch?v=E5zXCY63WpU"

        },
        {
            id: "3",
            title: "Productivity Tip",
            content: "The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.",
            type: "tweet",
            tags: ["productivity", "learning"],
            date: "08/03/2024",
            link: "https://x.com/kirat_tw/status/1851276597812162645"
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
                        { icon: Youtube, label: "Videos" },
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
                <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                        onClick={toggleSidebar}
                    >
                        <FileText className="h-5 w-5" />
                        <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                    <div className="flex-1">
                        <h1 className="text-xl font-semibold">All Notes</h1>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary" className="gap-2">
                                <Share2 className="h-5 w-5" />
                                Share Brain
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white max-w-lg mx-auto p-6 rounded-lg shadow-xl">
                            <DialogHeader>
                                <DialogTitle>Share Your Second Brain</DialogTitle>
                                <DialogDescription>
                                    Share your entire collection of notes, documents, tweets, and videos with others. They&apos;ll be able to import your content into their own Second Brain.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 pt-4">
                                <Button className="w-full gap-2">
                                    <Copy className="h-8 w-5" />
                                    Share Brain
                                </Button>
                                <p className="text-center text-sm text-muted-foreground">
                                    {notes.length} items will be shared
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Button className="gap-2 ">
                        <FileText className="h-5 w-5" />
                        Add Content
                    </Button>
                </header>

                <main className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {notes.map((note) => (
                        <CardComponent key={note.id} note={note} />
                    ))}
                </main>
            </div>
        </div>
    )
}