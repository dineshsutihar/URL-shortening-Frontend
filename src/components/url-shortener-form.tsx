"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function UrlShortenerForm() {
  const [url, setUrl] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your URL shortening logic here
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-4">
      <Input
        type="url"
        placeholder="Shorten a link here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1"
        required
      />
      <Button type="submit" size="lg">
        Shorten It!
      </Button>
    </form>
  )
}

