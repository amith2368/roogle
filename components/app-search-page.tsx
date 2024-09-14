'use client'

import React, {useEffect, useState} from 'react'
import { Search, Mic, Image, Video, Newspaper, MoreVertical } from "lucide-react"
import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RoogleSearch } from "@/app/actions";
import { useSearchParams } from 'next/navigation'

interface SearchResult {
    title: string
    link: string
    displayLink: string
    snippet: string
    pagemap: {
        cse_thumbnail: {
            src: string
        }
    }
}

function SkeletonLoader() {
  return (
    <div>
    {Array.from({ length: 5 }).map((_, index) => (
        <div className="animate-pulse" key={index}>
          <div className="h-2.5 bg-[#343536] rounded-full w-48 mb-4"></div>
          <div className="h-2 bg-[#343536] rounded-full max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-[#343536] rounded-full mb-2.5"></div>
          <div className="h-2 bg-[#343536] rounded-full max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-[#343536] rounded-full max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-[#343536] rounded-full max-w-[360px]"></div>
        </div>
    ))
    }
    </div>
  )
}

export function AppSearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query && query?.length > 0) {
      handleSearch()
    }
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setIsLoading(true)
    try {
      const googleResults = await RoogleSearch(query)
      setResults(googleResults.organic_results)

      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.set('q', query)
      window.history.pushState(null, '', `?${newSearchParams.toString()}`)
    } catch (error) {
      console.error('Error fetching Roogle results:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <div className="min-h-screen bg-[#1A1A1B] text-[#D7DADC]">
        <header className="border-b border-[#343536] py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center">
            <Link href="/"
                  className="text-3xl font-bold mr-8 bg-gradient-to-r from-[#FF4500] to-[#FF8717] text-transparent bg-clip-text">
              Roogle
            </Link>
            <form onSubmit={handleSearch} className="flex-grow max-w-2xl relative">
              <Input
                  className="w-full h-10 pl-10 pr-4 rounded-full bg-[#272729] border-[#343536] focus:border-[#D7DADC] focus:ring-1 focus:ring-[#D7DADC]"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Roogle"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#D7DADC]"/>
              <Mic className="absolute right-3 top-2.5 h-5 w-5 text-[#D7DADC]"/>
            </form>
          </div>
          <nav className="max-w-7xl mx-auto mt-4 flex space-x-6 text-sm">
            <Link href="#" className="flex items-center border-b-2 border-[#FF4500] pb-2">
              <Search className="h-4 w-4 mr-1"/> All
            </Link>
            <Link href="#" className="flex items-center pb-2">
              <Image className="h-4 w-4 mr-1"/> Images
            </Link>
            <Link href="#" className="flex items-center pb-2">
              <Video className="h-4 w-4 mr-1"/> Videos
            </Link>
            <Link href="#" className="flex items-center pb-2">
              <Newspaper className="h-4 w-4 mr-1"/> News
            </Link>
            <Link href="#" className="flex items-center pb-2">
              <MoreVertical className="h-4 w-4 mr-1"/> More
            </Link>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto py-8 px-6 flex">
          <div className="w-11/12 md:w-2/3 pr-8">
            {isLoading ? (
                <SkeletonLoader/>
            ) : results.length > 0 ? (
                <>
                  <p className="text-sm text-[#909296] mb-4">About {results.length} results</p>
                  {results.map((result, index) => (
                      <div key={index} className="mb-8">
                        <div className="text-sm text-[#909296] mb-1 break-words">{result.link}</div>
                        <h2 className="text-xl mb-1">
                          <a href={result.link} className="text-[#8AB4F8] hover:underline" target="_blank"
                             rel="noopener noreferrer">
                            {result.title}
                          </a>
                        </h2>
                        <p className="text-sm">{result.snippet}</p>
                      </div>
                  ))}
                </>
            ) : (
                <p>No results found. Try searching for something!</p>
            )}
          </div>
          {/*<div className="w-1/3 border-l border-[#343536] pl-8">*/}
          {/*  <div className="bg-[#272729] p-4 rounded-lg">*/}
          {/*    <h2 className="text-xl mb-2">Roogle</h2>*/}
          {/*    <p className="text-sm mb-2">Roogle is a fictional search engine created as a dark-themed clone of Google,*/}
          {/*      combining elements of Google&apos;s layout with Reddit&apos;s magical answers.</p>*/}
          {/*    /!*<img src="/placeholder.svg?height=150&width=250" alt="Roogle logo" className="w-full mb-2 rounded" />*!/*/}
          {/*    <div className="text-sm">*/}
          {/*      <p><strong>Founded:</strong> 2024</p>*/}
          {/*      <p><strong>Headquarters:</strong> Internet</p>*/}
          {/*      <p><strong>Founders:</strong> AI Assistants</p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
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