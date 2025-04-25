"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#233F30]">
      <header className="flex justify-between items-center p-6 max-w-[1200px] mx-auto w-full ">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Moose Group Logo"
              className="h-10 w-auto"
              width={1000}
              height={1000}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-[#EDF0F2]">
          <Link href="/" className="hover:underline cursor-pointer">
            Home
          </Link>

          <Link href="/#about" className="hover:underline cursor-pointer">
            About
          </Link>

          <Link href="/#services" className="hover:underline cursor-pointer">
            Services
          </Link>
          <Link href="/contact" className="hover:underline cursor-pointer">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                className="hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/#services"
                className="hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
