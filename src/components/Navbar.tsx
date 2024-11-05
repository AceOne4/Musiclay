"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 }
    );
  });

  return (
    <div className="navbar  shadow-md shadow-gray-100 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow border-r-2 border-l-2 border-b-2 border-gray-100"
          >
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link ref={boxRef} href="/" className="btn btn-ghost text-xl">
          <Image src="/MusicLogo0.PNG" alt="logo" height={50} width={50} />
          <span className="font-semibold text-sm text-indigo-200">
            ACEYMUSIC
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="#" className="btn-outline py-2 px-2 rounded-md">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
