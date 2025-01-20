"use client"
import { useSearchParams } from "next/navigation"
import React, { useEffect } from "react"

export default function TestRedirect() {
  const searchParams = useSearchParams()
  const from = searchParams.get("from")
  useEffect(() => {
    window.location.replace(
      from == "testigcamp" ? `/es/test?from=testigcamp` : "/es/test"
    )
  }, [from])

  return null
}
