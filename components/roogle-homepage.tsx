'use client'

import { useState } from "react"
import { Search, Mic } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import {RoogleSearch} from "@/app/actions";

export function RoogleHomepage() {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter()

  const handleSearchClick = async (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
    }
  };

  const handleLuckyShyClick = async () => {
    try {
      const googleResults = await RoogleSearch(searchTerm, 1)
      window.open(googleResults.organic_results[0].link, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error('Error fetching Roogle results:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1B] flex flex-col items-center justify-between p-4">
      <div className="w-full max-w-2xl mx-auto mt-24 flex flex-col items-center">
        <h1 className="text-6xl h-[4rem] font-bold mb-8 bg-gradient-to-r from-[#FF4500] to-[#FF8717] text-transparent bg-clip-text">
          Roogle
        </h1>
        <form onSubmit={handleSearchClick} className="relative w-full">
          <Input
            className="w-full h-12 pl-12 pr-4 rounded-full bg-[#272729] text-white border-[#343536] focus:border-[#D7DADC] focus:ring-1 focus:ring-[#D7DADC]"
            placeholder="Search Roogle or type a URL"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-3 h-6 w-6 text-[#D7DADC]" />
          <Mic className="absolute right-4 top-3 h-6 w-6 text-[#D7DADC]" />
        </form>
        <div className="mt-8 flex space-x-4">
          <Button type="submit" className="bg-[#272729] text-[#D7DADC] hover:bg-[#343536]">
            Roogle Search
          </Button>
          <Button onClick={handleLuckyShyClick} className="bg-[#272729] text-[#D7DADC] hover:bg-[#343536]">
            I&apos;m Feeling Shy
          </Button>
        </div>
      </div>
      <footer className="w-full text-[#D7DADC] text-sm">
        <div className="border-t border-[#343536] py-3">
          <div className="max-w-6xl mx-auto flex justify-between">
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">No Advertising</a>
              <a href="#" className="hover:underline">Business?</a>
              <a href="#" className="hover:underline">How Roogle works</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}