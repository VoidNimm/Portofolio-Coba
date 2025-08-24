'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm transition-shadow duration-300 ease-gentle',
        hasScrolled && 'shadow-nav'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="font-bold text-lg">
          {/* Placeholder for Logo/Name */}
          Jules
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative text-sm font-medium text-muted transition-colors hover:text-foreground',
                pathname === item.href && 'text-foreground'
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent motion-safe:transition-all motion-safe:duration-medium motion-safe:ease-gentle" />
              )}
            </Link>
          ))}
        </nav>
        {/* Mobile menu button will be added later */}
        <div className="md:hidden">
            {/* Placeholder for mobile menu */}
        </div>
      </div>
    </header>
  )
}
