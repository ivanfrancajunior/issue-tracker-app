"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14 shadow-sm'>
      <Link href={"/"}>
        <AiFillBug className='text-3xl' />
      </Link>

      <ul className='flex space-x-6'>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-orange-500": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-600": link.href !== currentPath,
                "hover:text-orange-700": link.href === currentPath,
                "transition-colors duration-100": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
