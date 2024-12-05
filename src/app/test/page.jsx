"use client"
import React, { useEffect } from "react"

export default function TestRedirect() {
  useEffect(() => {
    window.location.replace(
      "/es/test"
    )
  }, [])

  return null
}
