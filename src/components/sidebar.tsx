import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2"><Link href="#" className="hover:text-gray-400">Home</Link></li>
        <li className="mb-2"><Link href="#" className="hover:text-gray-400">Profile</Link></li>
        <li className="mb-2"><Link href="#" className="hover:text-gray-400">Settings</Link></li>
        <li className="mb-2"><Link href="#" className="hover:text-gray-400">Logout</Link></li>
      </ul>
    </div>
  );
}