"use client";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import Transition from "./transition.module.css";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaDiscord } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Sidebar from "../sidebar";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

    const activeTheme = theme === "system" ? systemTheme : theme

      function Toggle () {
          setTheme(activeTheme === "dark"?  "light" : "dark")
      }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="flex top-0 sticky h-20 items-center justify-between px-4 md:px-8 w-full bg-white dark:bg-[#121212] text-gray-900 dark:text-white border-b border-gray-200 dark:border-transparent z-20">
        <Link href="/" className="flex flex-row items-center space-x-2 md:space-x-4">
          <Avatar className="border-2 md:border-4 border-green-600 w-10 h-10 md:w-12 md:h-12">
            <AvatarImage src={"image.png"} />

            <AvatarFallback> M </AvatarFallback>
          </Avatar>

          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Myra Bot</h1>
        </Link>

        <div className="flex flex-row items-center space-x-2 md:space-x-4 lg:space-x-8">
          <nav>
            <ul className="hidden lg:flex flex-row space-x-4">
              
              <li>
                <Link href="/docs" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium">
                  Docs
                </Link>
              </li>
            
              <li>
                <Link href="/team" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium">
                  Team
                </Link>
              </li>
            </ul>
          </nav>
          <Button
            onClick={() =>
              redirect(
                "https://discord.com/oauth2/authorize?client_id=1455017163353096276&permissions=8&integration_type=0&scope=bot"
              )
            }
            className="hidden md:flex text-base px-6 sm:px-8 bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0"
          >
            <FaDiscord />
            <span className="ml-2">Me adicione</span>
          </Button>
          <Button suppressHydrationWarning
            variant={"ghost"}
            onClick={Toggle}
          >
            {theme == "dark"? <Moon/> : <Sun/>}
            
          </Button>
          <Button onClick={() => setMenu(!menu)} variant={"ghost"} className="lg:hidden p-2">
            {menu === true ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <Sidebar open={menu} />
    </>
  );
}
