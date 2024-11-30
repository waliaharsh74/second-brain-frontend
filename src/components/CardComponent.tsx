import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import { CardProps } from '../types/types'
import { Button } from './ui/button'
import { Copy, Share2, Trash2 } from 'lucide-react'
import { getIcon } from '@/utils/getIcon'
import { Tweet } from 'react-tweet'
import '../globals.css'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



const extractYouTubeId = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\/|\S*?[?&]v=)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

const extractTweetId = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?x\.com\/(?:[^\/]+\/)?status(?:es)?\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const CardComponent: React.FC<CardProps> = ({ note }) => {
    const handleDelete = (id: string) => {
        console.log("id", id);
    }
    return (
        <Card key={note._id}>
            <CardHeader className="flex flex-row items-center gap-2">
                {getIcon(note?.type)}
                <CardTitle className="text-base">{note.title}</CardTitle>
            </CardHeader>
            {note.content && note.type != 'video' && (
                <CardContent>
                    <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                        {note.content}
                    </p>
                </CardContent>
            )}
            {note?.type?.toLowerCase() === 'video' && (
                <CardContent>
                    <iframe

                        src={`https://www.youtube.com/embed/${extractYouTubeId(note.link || "")}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </CardContent>
            )}
            {note.type === 'tweet' && (
                <CardContent className=''>
                    <a href={note.link} className='block w-full break-words'>{note.link}</a>
                </CardContent>
            )}
            <CardFooter className="flex flex-col items-stretch gap-2">
                <div className="flex gap-1">
                    {note.tags.map((tag) => (
                        <Button
                            key={tag}
                            variant="secondary"
                            className="h-6 rounded-full px-2 text-xs"
                        >
                            #{tag}
                        </Button>
                    ))}
                </div>
                <div className="flex items-center justify-between">

                    <div className="flex gap-0.5">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground"
                        >
                            <Share2 className="h-4 w-4" />
                            <span className="sr-only">Share</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground"
                            onClick={() => handleDelete(note?._id)}

                        >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CardComponent