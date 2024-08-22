"use client"

import React from "react";


const Impact = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center text-center justify-center text-white justify-around transition-all duration-500">
             <div>
                <h1 className="leading-10 pb-1">Happy Clients</h1>
                <div className="font-bold md:font-extrabold text-3xl md:text-4xl lg:text-6xl">100%</div>

            </div>
            <div className="">
                <h1 className="leading-10 pb-1">Clients</h1>
                <div className="font-bold md:font-extrabold text-3xl md:text-4xl lg:text-6xl">256+</div>
            </div>
            <div>
                <h1 className="leading-10 pb-1">Impact</h1>
                <div className="font-bold md:font-extrabold text-3xl md:text-4xl lg:text-6xl">10K</div>

            </div>
        </div>
    )
}

export default Impact;