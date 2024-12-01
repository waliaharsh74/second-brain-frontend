import { ReactElement } from "react"

export type Note = {
    _id: string
    title: string
    content: string
    type: "tweet" | "video" | "document" | "text"
    tags: string[]
    date: string,
    link?: string
}
export type NavbarProps = {
    toggleSidebar: () => void;
    notes: Note[];
};
export type CardProps = {
    // toggleSidebar: () => void;
    note: Note;
    fetchData: () => void
};
export type FrameworkProps = {
    value: string,
    label: string,
    icon: React.ComponentType<{ className?: string }>
};
