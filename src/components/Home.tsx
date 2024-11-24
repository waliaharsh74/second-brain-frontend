import * as React from "react"
import { Copy, FileText, Hash, Link2, Share2, Twitter, Youtube } from 'lucide-react'
import { cn } from "@/lib/utils"
import axios from "axios"
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
import { MultiSelect } from "./MultiSelect"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { TypeFramework, TagsFramework } from '../utils/frameworks'
import { useDropDown } from "../hooks/usedropDown"
import { useToast } from "@/hooks/use-toast"


export default function Home() {
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
    const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>(["Productivity", "Ideas"]);
    const [title, setTitle] = React.useState("");
    const [link, setLink] = React.useState("");
    const { value: typeValue, Component: TypeComponent } = useDropDown(TypeFramework)
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
    const { toast } = useToast()


    const handleSubmit = async () => {
        console.log(selectedFrameworks, title, typeValue);
        if (!selectedFrameworks || !title || !typeValue) {

            toast({
                title: "Uh oh! Something went wrong.",
                description: "Please Select all required feilds",
            })
        }
        try {
            const response = await axios.post('http://localhost:3000/api/v1/content', { link: link, type: typeValue, title, tags: selectedFrameworks })
            console.log(response);
        } catch (error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "check console for error",
            })
            console.log(error);
        }
    }
    React.useEffect(() => {
        const FetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/api/v1/content')
                setNotes(data?.content);
                console.log("notes", data);
            } catch (error) {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: "check console for error",
                })
                console.log(error);
            }

        }
        FetchData()

    }, [])




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
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="gap-2">
                                <FileText className="h-5 w-5" />
                                Add Content
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white max-w-lg mx-auto p-6 rounded-lg shadow-xl">
                            <DialogHeader>
                                <DialogTitle>Add Content</DialogTitle>
                                <DialogDescription>
                                    Share your entire collection of notes, documents, tweets, and videos with others. They&apos;ll be able to import your content into their own Second Brain.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 pt-4">

                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                            type="title"
                                            placeholder="Productivity Tip 💡"
                                            required
                                        />
                                    </div>


                                    <div className="grid gap-2">
                                        <Label htmlFor="type">Type</Label>

                                        {TypeComponent}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="tag">Tag</Label>
                                        <MultiSelect
                                            options={TagsFramework}
                                            onValueChange={setSelectedFrameworks}
                                            defaultValue={selectedFrameworks}
                                            placeholder="Select frameworks"
                                            variant="inverted"
                                            animation={2}
                                            maxCount={3}
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="link">Link</Label>
                                        <Input
                                            id="link"
                                            value={link}
                                            onChange={(e) => setLink(e.target.value)}
                                            type="link"
                                            placeholder="www.youtube.com/123"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="content">Content</Label>

                                        </div>

                                        <Textarea />
                                    </div>


                                    <Button type="submit" onClick={handleSubmit} className="w-full">
                                        Add content
                                    </Button>

                                </div>

                            </div>
                        </DialogContent>
                    </Dialog>

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