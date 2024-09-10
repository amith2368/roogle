'use client'

import { Search, Mic, Image, Video, Newspaper, MoreVertical } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RoogleSearchResults() {
  return (
    <div className="min-h-screen bg-[#1A1A1B] text-[#D7DADC]">
      <header className="border-b border-[#343536] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/" className="text-3xl font-bold mr-8 bg-gradient-to-r from-[#FF4500] to-[#FF8717] text-transparent bg-clip-text">
            Roogle
          </Link>
          <div className="flex-grow max-w-2xl relative">
            <Input
              className="w-full h-10 pl-10 pr-4 rounded-full bg-[#272729] border-[#343536] focus:border-[#D7DADC] focus:ring-1 focus:ring-[#D7DADC]"
              defaultValue="Roogle search"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#D7DADC]" />
            <Mic className="absolute right-3 top-2.5 h-5 w-5 text-[#D7DADC]" />
          </div>
        </div>
        <nav className="max-w-7xl mx-auto mt-4 flex space-x-6 text-sm">
          <Link href="#" className="flex items-center border-b-2 border-[#FF4500] pb-2">
            <Search className="h-4 w-4 mr-1" /> All
          </Link>
          <Link href="#" className="flex items-center pb-2">
            <Image className="h-4 w-4 mr-1" /> Images
          </Link>
          <Link href="#" className="flex items-center pb-2">
            <Video className="h-4 w-4 mr-1" /> Videos
          </Link>
          <Link href="#" className="flex items-center pb-2">
            <Newspaper className="h-4 w-4 mr-1" /> News
          </Link>
          <Link href="#" className="flex items-center pb-2">
            <MoreVertical className="h-4 w-4 mr-1" /> More
          </Link>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-6 flex">
        <div className="w-2/3 pr-8">
          <p className="text-sm text-[#909296] mb-4">About 42,000,000 results (0.52 seconds)</p>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="mb-8">
              <div className="text-sm text-[#909296] mb-1">https://www.example{i}.com</div>
              <h2 className="text-xl mb-1">
                <Link href="#" className="text-[#8AB4F8] hover:underline">Example Result Title {i} - Roogle Search</Link>
              </h2>
              <p className="text-sm">
                This is a brief description of the search result. It provides a summary of the content
                found on the linked page, helping users determine if it's relevant to their search query.
              </p>
            </div>
          ))}
          <div className="flex justify-center space-x-4 mt-10">
            <Button variant="ghost" className="text-[#8AB4F8]">1</Button>
            <Button variant="ghost" className="text-[#8AB4F8]">2</Button>
            <Button variant="ghost" className="text-[#8AB4F8]">3</Button>
            <Button variant="ghost" className="text-[#8AB4F8]">4</Button>
            <Button variant="ghost" className="text-[#8AB4F8]">5</Button>
            <Button variant="ghost" className="text-[#8AB4F8]">Next</Button>
          </div>
        </div>
        <div className="w-1/3 border-l border-[#343536] pl-8">
          <div className="bg-[#272729] p-4 rounded-lg">
            <h2 className="text-xl mb-2">Roogle</h2>
            <p className="text-sm mb-2">Roogle is a fictional search engine created as a dark-themed clone of Google, combining elements of Google's layout with Reddit's color scheme.</p>
            <img src="/placeholder.svg?height=150&width=250" alt="Roogle logo" className="w-full mb-2 rounded" />
            <div className="text-sm">
              <p><strong>Founded:</strong> 2023</p>
              <p><strong>Headquarters:</strong> Internet</p>
              <p><strong>Founders:</strong> AI Assistants</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-[#343536] py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between text-sm">
          <div className="flex space-x-6">
            <Link href="#" className="hover:underline">Help</Link>
            <Link href="#" className="hover:underline">Send feedback</Link>
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}