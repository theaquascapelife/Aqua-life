"use client";

import Link from "next/link";
import { User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../../public/Aqua-lifescape.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" aria-label="Go to home page">
          <Image
            src={logo}
            alt="Aqua Lifescape logo"
            width={80}
            height={80}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <Link
            href="/services"
            className="hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5 text-foreground">
          {/* <Link href="/login" aria-label="Account">
            <User className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>

          <Link href="/wishlist" aria-label="Wishlist">
            <Heart className="h-5 w-5 hover:text-primary transition-colors" />
          </Link> */}

          <Link href="/cart" aria-label="Cart">
            <ShoppingCart className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-background">
              <nav className="flex flex-col gap-6 text-sm font-medium text-foreground">
                <Link href="/shop" className="hover:text-primary">
                  Shop
                </Link>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
                <Link href="/wishlist" className="hover:text-primary">
                  Wishlist
                </Link>
                <Link href="/cart" className="hover:text-primary">
                  Cart
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
