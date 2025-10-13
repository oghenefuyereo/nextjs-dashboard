'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

export default function SideNav() {
  async function handleSignOut() {
    await signOut({ callbackUrl: '/' }); // Redirects to homepage after sign-out
  }

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Logo Section */}
      <Link
        href="/"
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      {/* Navigation Links and Sign Out */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />

        {/* Spacer for layout */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

        {/* Sign Out Button */}
        <button
          type="button"
          onClick={handleSignOut}
          className="flex h-[48px] w-full grow items-center justify-center gap-2 
                     rounded-md bg-gray-50 p-3 text-sm font-medium transition-all
                     hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <PowerIcon className="w-6" />
          <span className="hidden md:block">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
