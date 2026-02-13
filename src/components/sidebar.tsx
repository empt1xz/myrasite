'use client';

import { Button } from '@/components/ui/button';
import { FaDiscord } from 'react-icons/fa6';
import { useRouter } from 'next/navigation'

import Link from "next/link";

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const router = useRouter();

   function handleRedirect() {
    router.push("https://discord.com/oauth2/authorize?client_id=1455017163353096276&permissions=8&integration_type=0&scope=bot");
  }
  return (
    open && (
      <div className="w-64 h-screen bg-gray-800 z-25 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Myra Bot</h2>
      <nav>
            <ul className="md:hidden flex flex-col space-y-4">
              
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
    </div>
    )
  );
}