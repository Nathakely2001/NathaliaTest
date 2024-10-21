"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "@/lib/ThemeContext";
import IconOpenWhite from "./icons/IconOpenWhite";
import IconCloseWhite from "./icons/IconCloseWhite";

const Navbar: FC = () => {
  const [activeLink, setActiveLink] = useState<string>("Services");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isDarkTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`h-[80px] md:py-[31px] px-[10%] md:px-[81px] flex justify-between items-center relative z-[10] border-b-0   `}
    >
      <div
        id="logoFrench4Dev"
        className="flex items-center justify-between w-full md:w-auto z-[10]"
      >
        <div
          className={`text-[24px] font-bold ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          FRENCH4 <span className="text-blue-500">DEV.</span>
        </div>

        <button className="md:hidden text-white relative z-[20]" onClick={toggleMenu}> {/* Ajout de z-index */}
  {isMenuOpen ? <IconCloseWhite /> : <IconOpenWhite />}
</button>

       
      </div>

      <ul
        className={`fixed top-0 left-0 h-full w-[250px] bg-black z-[1] flex flex-col items-center gap-4 pt-20 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex-row md:w-auto md:pt-0 md:bg-transparent md:flex md:items-center md:gap-[40px]`}
      >
        {["Services", "Portfolio", "Blog", "Contact"].map((link) => (
          <li
            key={link}
            className="relative group text-center md:text-left"
            onClick={() => {
              setActiveLink(link);
              setIsMenuOpen(false);
            }}
          >
            <Link
              href="#"
              className={`block py-2 md:py-0 ${
                activeLink === link ? "font-bold opacity-100" : "opacity-50"
              } transition-opacity duration-300 ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              {link}
            </Link>

            {activeLink === link && (
              <div
                className="absolute left-0 md:bottom-[-29px] w-full h-1 transition-all duration-300"
                style={{ backgroundColor: "rgba(73, 96, 255, 1)" }}
              ></div>
            )}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
