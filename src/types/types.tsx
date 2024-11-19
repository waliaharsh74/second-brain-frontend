export type Note = {
    id: string
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
};