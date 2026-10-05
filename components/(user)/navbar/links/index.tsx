import { links } from "@/api/linklerin_muveqqeti_yerlesmesi";
import Link from "next/link";
import React from "react";



export const LinksComponent = () => {
 
  return (
    <ul className="min-[1000px]:flex min-[1000px]:justify-between min-[1000px]:pt-px min-[1000px]:mb-6 gapt-2  ">
      {links &&
        links.map(({ href, label }, index) => {
          return (
            <li key={index} className={
              `${href === "/ustalar-ucun" && "relative after:content-[''] min-[1000px]:after:absolute after:-left-3  after:top-0 after:translate-y-1/2 after:h-4 after:w-0.5 after:bg-(--secondary-color)"}
               max-[1000px]:border-t 
                max-[1000px]:border-(--secondary-color) 
                max-[1000px]:pt-2  
                max-[1000px]:pb-2`
            }>
              <Link
                href={href}
                className="
                text-black
                text-[14px] 
                hover:text-(--logo-color)
                relative 
                min-[1000px]:after:block 
                after:content-[''] 
                after:w-full 
                after:h-px 
                after:bottom-0 
                after:opacity-0 
                after:bg-(--logo-color)
                hover:after:opacity-100"
              >
                {label}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default LinksComponent;
