'use client'

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Nav = () => {

    const pathname = usePathname();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-800">

            {/* Desktop */}
            <div className="mx-auto max-w-7xl flex h-16 items-center">
                <div className="px-5 flex justify-between w-full md:w-auto flex-shrink-0">
                    <Link href = '/'><h1 className='text-white'><b>AWAS</b>: Anti-Kejahatan dan Waspada </h1></Link>
                    <button 
                        onClick={() => setMobileNavOpen(!mobileNavOpen)} 
                        className="md:hidden flex flex-col justify-center items-center"
                    >
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm ${mobileNavOpen ? 
                                        'rotate-45 translate-y-1' : '-translate-y-0.5'
                                        }`}>
                        </span>
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm my-0.5 ${mobileNavOpen ? 
                                        'opacity-0' : 'opacity-100'
                                        }`}>
                        </span>
                        <span className={`bg-white block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm ${mobileNavOpen ? 
                                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                        }`}>
                        </span>    

                    </button>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <Link href="/" className={`${pathname == "/" ? "nav-active" : "nav-not-active"} rounded-md px-3 py-2 text-sm font-medium`}>Lapor</Link>
                        <Link href="/lihat" className={`${pathname == "/lihat" ? "nav-active" : "nav-not-active"} rounded-md px-3 py-2 text-sm font-medium`}>Lihat Laporan</Link>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            {mobileNavOpen && <div className="md:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <Link href="/" className={`${pathname == "/" ? "nav-active" : "nav-not-active"} block rounded-md px-3 py-2 text-base font-medium`}>Laporkan</Link>
                    <Link href="/lihat" className={`${pathname == "/lihat" ? "nav-active" : "nav-not-active"} block rounded-md px-3 py-2 text-base font-medium`}>Lihat Laporan</Link>
                </div>
            </div> }
      </nav>
    )
}

export default Nav;