import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import { FileText, Hash, Link2, Twitter, Youtube } from 'lucide-react'

export const TypeFramework = [
    { icon: Twitter, label: "Tweet", value: "Tweet" },
    { icon: Youtube, label: "Video", value: "Video" },
    { icon: FileText, label: "Document", value: "Document" },
    { icon: Link2, label: "Link", value: "Link" },
    { icon: Hash, label: "Tag", value: "Tag" },
]


//  const TagsFramework = [
//     {
//         value: "next.js",
//         label: "Productivity",
//     },
//     {
//         value: "sveltekit",
//         label: "SvelteKit",
//     },
//     {
//         value: "nuxt.js",
//         label: "Nuxt.js",
//     },
//     {
//         value: "remix",
//         label: "Remix",
//     },
//     {
//         value: "astro",
//         label: "Astro",
//     },
// ]
export const TagsFramework = [
    { value: "Productivity", label: "Productivity", icon: Turtle },
    { value: "Ideas", label: "Ideas", icon: Cat },
    { value: "Learning", label: "Learning", icon: Dog },
    { value: "Inspiration", label: "Inspiration", icon: Rabbit },
    { value: "Mindset", label: "Mindset", icon: Fish },
];