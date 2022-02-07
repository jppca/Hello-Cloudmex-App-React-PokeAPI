import React from "react";

const URLImage = "https://1000marcas.net/wp-content/uploads/2020/01/Pokemon-Logo.png";

export function Header({subtitle }) {
    return (
        <div className="pt-6 bg-gradient-to-r from-green-400 to-blue-500 w-full">
            <div className="text-5xl font-extrabold  text-center grid justify-items-center">
            <img src={URLImage}  width="150" height="150" alt=""/>
            </div>
            <div className="pb-6 text-5xl font-extrabold  text-center ">
                <h2 className="text-white">
                    {subtitle}
                </h2>
            </div>
        </div>
    );
}
