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
      <div className="min-h-screen bg-[#1A1A1B] flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-2xl mx-auto px-4 flex flex-col items-center">
            <h1 className="text-4xl h-[4rem] sm:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF4500] to-[#FF8717] text-transparent bg-clip-text text-center">
              Roogle
            </h1>
            <form onSubmit={handleSearchClick} className="w-full">
              <div className="relative w-full">
                <Input
                    className="w-full h-12 pl-12 pr-4 rounded-full bg-[#272729] text-white border-[#343536] focus:border-[#D7DADC] focus:ring-1 focus:ring-[#D7DADC]"
                    placeholder="Search Roogle or type a URL"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3 h-6 w-6 text-[#D7DADC]"/>
                <Mic className="absolute right-4 top-3 h-6 w-6 text-[#D7DADC]"/>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button type="submit" className="bg-[#272729] text-[#D7DADC] hover:bg-[#343536] w-full sm:w-auto">
                  Roogle Search
                </Button>
                <Button type="button" className="bg-[#272729] text-[#D7DADC] hover:bg-[#343536] w-full sm:w-auto">
                  I&apos;m Feeling Lucky
                </Button>
              </div>
            </form>
          </div>
        </div>
        <footer className="w-full text-[#D7DADC] text-sm">
          <div className="border-t border-[#343536] py-3">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between px-4">
              <div className="flex flex-wrap justify-center sm:justify-start space-x-4 mb-4 sm:mb-0">
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Advertising</a>
                <a href="#" className="hover:underline">Business</a>
                <a href="#" className="hover:underline">How Search works</a>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
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