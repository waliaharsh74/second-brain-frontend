import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import { CardProps } from '../types/types'
import { Button } from './ui/button'
import { Share2, Trash2 } from 'lucide-react'
import { getIcon } from '@/utils/getIcon'

const CardComponent: React.FC<CardProps> = ({ note }) => {
    return (
        <Card key={note.id}>
            <CardHeader className="flex flex-row items-center gap-2">
                {getIcon(note.type)}
                <CardTitle className="text-base">{note.title}</CardTitle>
            </CardHeader>
            {note.content && (
                <CardContent>
                    <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                        {note.content}
                    </p>
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
                    <span className="text-sm text-muted-foreground">
                        Added on {note.date}
                    </span>
                    <div className="flex gap-0.5">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-muted-foreground"
                                    >
                                        <Share2 className="h-4 w-4" />
                                        <span className="sr-only">Share</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Share</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-muted-foreground"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Delete</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CardComponent