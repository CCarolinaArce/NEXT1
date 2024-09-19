
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Page",
    description: "This is my page app prices description",
    keywords: [ "nextjs", "prices", "vercel" ],
}


export default function About() {
    return ( 
        <main>
        <h1 className="flex flex-col items-center p-24">About Page!</h1>
    
        </main>
    )
}
