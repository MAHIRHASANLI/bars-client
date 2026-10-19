import Link from 'next/link'
import React from 'react'

const ServicesMoreCarouselItem = () => {
  return (
     (
              <div className="max-w-73 h-44 p-4 rounded-2xl overflow-hidden transition-all duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.125)] hover:shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
                <Link href="">
                  <div>
                    <div>
                      <span className="text-[#0071bc] text-xs font-semibold uppercase leading-3 mb-2 tracking-wide">
                        TRAde IN
                      </span>
                    </div>
                    <div className="text-2xl font-semibold tracking-wide leading-7">
                      Sizin{" "}
                      <span className="text-(--bars-color-green)">
                        Elektron Karrektorunuzu
                      </span>{" "}
                      yenileyin
                    </div>
                  </div>
                </Link>
              </div>
            )
  )
}

export default ServicesMoreCarouselItem