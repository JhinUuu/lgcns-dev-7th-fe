"use client";
import Link from "next/link"
import { useState } from "react";

export default function MobileNavigation(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        {isOpen && (
            <div className="md:hidden">
                <ul>
                    <li><Link href="/">Home</Link></li>
                </ul>
            </div>
        )}
        </>
    );
}