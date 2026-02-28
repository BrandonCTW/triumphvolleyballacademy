"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/boys-indoor", label: "Boys Indoor" },
  { href: "/girls-indoor", label: "Girls Indoor" },
  { href: "/sand", label: "Sand" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: "#1E2D5C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logos/TVA-Logo.png"
              alt="Triumph Volleyball Academy"
              width={140}
              height={48}
              unoptimized
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200"
                  style={{
                    color: isActive ? "#3DBFB0" : "#ffffff",
                    backgroundColor: isActive ? "rgba(61,191,176,0.15)" : "transparent",
                    borderBottom: isActive ? "2px solid #3DBFB0" : "2px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-semibold rounded-md mb-1 transition-all"
                  style={{
                    color: isActive ? "#3DBFB0" : "#ffffff",
                    backgroundColor: isActive ? "rgba(61,191,176,0.15)" : "transparent",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
