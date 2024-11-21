"use client"
import React, { useEffect } from "react"

export default function WebmailPage() {
  useEffect(() => {
    window.location.replace(
      "https://p3plzcpnl504813.prod.phx3.secureserver.net:2096/"
    )
  }, [])

  return null
}
