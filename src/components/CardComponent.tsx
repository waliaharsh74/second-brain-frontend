import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CardProps } from '../types/types'
import { Button } from './ui/button'
import { Share2, Trash2 } from 'lucide-react'
import { getIcon } from '@/utils/getIcon'
import '../globals.css'
import axios from 'axios'
import { toast } from '@/hooks/use-toast'
import { Tweet } from 'react-tweet'





const extractYouTubeId = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\/|\S*?[?&]v=)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

const extractTweetId = (url: string): string | undefined => {
    const regex = /(?:https?:\/\/)?(?:www\.)?x\.com\/(?:[^\/]+\/)?status(?:es)?\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : undefined;
};

const CardComponent: React.FC<CardProps> = ({ note, fetchData }) => {
    const handleDelete = async (contentId: string) => {

        try {
            const token = localStorage.getItem("secondBrainToken");
            const headers = {
                authorization: `Bearer ${token}`
            }
            const response = await axios.delete('http://localhost:3000/api/v1/content', { data: { contentId }, headers })
            console.log(response);
            toast({
                title: "Success!",
                description: "Content Deleted Succesfully",
            })
            fetchData()


        } catch (error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "check console for error",
            })
            console.log(error);
        }
    }
    return (
        <Card key={note._id} className='h-auto'>
            <CardHeader className="flex flex-row items-center gap-2">
                {getIcon(note?.type)}
                <CardTitle className="text-base">{note.title}</CardTitle>
            </CardHeader>

            {note?.content && <CardContent>
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                    {note?.content}
                </p>
            </CardContent>}

            {note?.type?.toLowerCase() === 'video' && (
                <CardContent >
                    <iframe
                        className='w-full h-auto'
                        src={`https://www.youtube.com/embed/${extractYouTubeId(note.link || "")}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </CardContent>
            )}
            {note.type === 'tweet' && (
                <CardContent >
                    <div className="tweets">

                        <Tweet apiUrl='' id={extractTweetId(note.link || '')} />
                    </div>
                    {/* <a href={note.link} className='block w-full break-words'>{note.link}</a> */}
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

                    <div className="flex gap-0.5 justify-end">
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