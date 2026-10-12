"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            NaturaSolve
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium hover:text-blue-600">
              Products
            </Link>
            <Link href="/reseller-program" className="text-sm font-medium hover:text-blue-600">
              Reseller Program
            </Link>
            <Link href="/fleet-services" className="text-sm font-medium hover:text-blue-600">
              Fleet Services
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>

          {session ? (
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth/signin">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
