"use client"
import {useState} from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Mountain, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("50k")
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8" />
              <h1 className="text-2xl font-bold"><Link href="/" >Distance Guru</Link></h1>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-4 items-center">
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/">Home</Link>
                  </Button>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center space-x-1">
                        <span>Training Plans</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <Link href="/training-plan/28k"><DropdownMenuItem>28k</DropdownMenuItem></Link>
                      <Link href="/training-plan/50k"><DropdownMenuItem>50k</DropdownMenuItem></Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#">Home</a>
                </Button>
              </li>
              <li>
                  <a href="#">Training Plans</a>
              </li>
                <li>
                  <Link href="/training-plan/28k">
                    <Button
                      variant={selectedPlan === "28k" ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={toggleMobileMenu}
                    >
                      28k
                    </Button>
                  </Link>
                  <Link href="/training-plan/50k">
                    <Button
                      variant={selectedPlan === "28k" ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={toggleMobileMenu}
                    >
                      50k
                    </Button>
                  </Link>
                </li>
            </ul>
          </nav>
        )}
      </header>
  )
}
