"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[64px] w-full max-w-7xl items-center justify-between gap-3 px-3 sm:min-h-[72px] sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 shrink-0 items-center gap-2"
          aria-label="Apki Manzil Home"
        >
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl sm:h-10 sm:w-10">
            <Image
              src="/images/logo.jpeg"
              alt="Apki Manzil Logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>

          <span className="truncate text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
            Apki <span className="text-teal-700">Manzil</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <Link
            href="/"
            className="rounded-lg px-2 py-2 text-sm font-medium text-gray-700 transition hover:text-green-400"
          >
            Home
          </Link>

          <Link
            href="/properties"
            className="rounded-lg px-2 py-2 text-sm font-medium text-gray-700 transition hover:text-green-400"
          >
            Properties
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-2 py-2 text-sm font-medium text-gray-700 transition hover:text-green-400"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden min-h-11 shrink-0 items-center justify-center rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500 active:scale-[0.98] md:flex lg:px-5"
        >
          List Property
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 active:scale-95 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-3 py-3 sm:px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:bg-gray-100"
            >
              Home
            </Link>

            <Link
              href="/properties"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:bg-gray-100"
            >
              Properties
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:bg-gray-100"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.98]"
            >
              List Property
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}