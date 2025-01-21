"use client"
import { useSearchParams } from "next/navigation"
import React, { Suspense, useEffect } from "react"

function TestComponent() {
  const searchParams = useSearchParams()
  const from = searchParams.get("from")
  useEffect(() => {
    window.location.replace(from ? `/es/test?from=${from}` : "/es/test")
  }, [from])

  return null
}

export default function TestRedirect() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestComponent />
    </Suspense>
  )
}
