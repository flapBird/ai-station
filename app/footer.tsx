"use client";

import {items} from "@/app/data";
import * as https from "https";

export function Footer() {
    // const footerNavs = [
    //     {
    //         href: 'https://shipfa.st/?via=lees',
    //         name: 'ShipFast'
    //     },
        // {
        //     href: 'javascript:void()',
        //     name: 'Team'
        // },
        // {
        //     href: 'javascript:void()',
        //     name: 'Suuport'
        // }
    // ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="/icon6.jpeg" className="w-12 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    MagicBox AI Tools Directory, Discover the top AI tools of 2024 with the MagicBox AI Directory!
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    <div className="flex items-center">
                        <img src="/shipfast.png" className="w-6 sm:mx-auto" />
                        <a className="flex items-center" href='https://shipfa.st/?via=lees'>ShipFast</a>
                    </div>
                }
            </ul>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    );
}