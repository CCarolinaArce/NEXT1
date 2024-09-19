//import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <span className="text-5xl font-bold text-blue-500 mr-8">
        Hola soy el HOME por default...
      </span>
    <Link href="/about">Ir a About</Link>
    </main>
  );
}

