"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
];

const FULL_HEADER_HEIGHT = 64;
const COLLAPSED_HEADER_HEIGHT = 40;
const TOP_OFFSET = 16; // space from top of viewport

const Header = () => {
  const [showFullHeader, setShowFullHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Collapse header on scroll down, show on scroll up or near top
      if (Math.abs(currentY - lastScrollY) > 10) {
        if (currentY > lastScrollY && currentY > 50) {
          setShowFullHeader(false);
        } else {
          setShowFullHeader(true);
        }
        setLastScrollY(currentY);
      }

      // Update active section based on visible h1 headings
      const headings = Array.from(document.querySelectorAll("h1"));
      const offset = FULL_HEADER_HEIGHT + TOP_OFFSET + 10;

      let currentSection = "";
      for (const heading of headings) {
        const rect = heading.getBoundingClientRect();
        if (rect.top - offset < 0) {
          currentSection = heading.textContent;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className="sticky top-0 z-50 bg-gray-100 px-4"
      style={{
        height: showFullHeader ? FULL_HEADER_HEIGHT : COLLAPSED_HEADER_HEIGHT,
        transition: "height 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        borderRadius: "1rem",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div
        className="bg-sky-900 w-full px-6 rounded-2xl shadow-lg flex items-center justify-center relative"
        style={{ height: "100%" }}
      >
        {/* Full nav - fade in/out */}
        <nav
          className={`flex items-center justify-center gap-8 flex-wrap absolute inset-0 transition-opacity duration-300 ${
            showFullHeader ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-zinc-100 font-poppins no-underline text-lg font-bold hover:scale-110 transition-transform duration-200 ${
                pathname === item.href ? "underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Collapsed active section title */}
        <div
          className={`flex items-center justify-center absolute inset-0 transition-opacity duration-300 ${
            showFullHeader ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <span className="text-zinc-100 font-poppins text-lg font-bold truncate">
            {activeSection || navItems.find((item) => item.href === pathname)?.name}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
