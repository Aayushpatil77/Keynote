import React from "react";
import Image from "next/image";
/**
 *
 * @return {JSX.Element} Navbar for the site
 */
export default function Navbar(): JSX.Element {
    const hoverButtonEffect = "hover:bg-gray-200";

    return (
        <>
            <nav className="h-[70px] bg-red-400 grid md:gap-4 md:grid-cols-3 grid-cols-1 grid-rows-1 font-barlow">
                <div className="w-[70px] justify-center items-center ml-40 hidden md:flex">
                    <button
                        className={`outline-none ${hoverButtonEffect} w-[35px] h-[35px] rotate-90  rounded-md flex justify-center items-center`}
                    >
                        <Image
                            src="/arrow-down.svg"
                            height="24px"
                            width="24px"
                        />
                    </button>
                    <button
                        className={`outline-none ${hoverButtonEffect} w-[35px] h-[35px] -rotate-90  rounded-md flex justify-center items-center`}
                    >
                        <Image
                            src="/arrow-down.svg"
                            height="24px"
                            width="24px"
                        />
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex font-bold text-xl">
                        <li className={`${hoverButtonEffect} px-1 rounded-md`}>
                            Home
                        </li>
                        <li
                            className={`${hoverButtonEffect} px-1 rounded-md mx-8`}
                        >
                            Explore
                        </li>
                        <li className={` px-1 rounded-md ${hoverButtonEffect}`}>
                            Library
                        </li>
                    </ul>
                </div>
                <div>{/* searchbar and profile */}</div>
            </nav>
        </>
    );
}
