import React from 'react'
import { Button } from './ui/button'
import { Copy, FileText, Share2 } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogHeader } from './ui/dialog'
import { Note, NavbarProps } from '../types/types'

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, notes }) => {
    return (
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
                <DialogContent className="bg-white">
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
    )
}

export default Navbar