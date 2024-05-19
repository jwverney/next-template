'use client'

import { useEffect } from "react";

export default function RootLayout({ children }) {
  return (
    <>
    <div className="bg-primary"> 
      {children}
    </div>
    </>
  )
}

