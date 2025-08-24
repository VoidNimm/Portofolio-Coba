import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com', label: 'Twitter/X' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 max-w-screen-xl px-4 md:flex-row md:px-8">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Jules. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted transition-colors hover:text-foreground"
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
