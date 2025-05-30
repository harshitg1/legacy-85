'use client'

import React from 'react'

const IMAGES = [
    // Column 1 (centered)
    { src: '/t2.jpg', alt: 'Column 1', col: 1 },

    // Column 2
    { src: '/class.jpeg', alt: 'Classroom', col: 2, order: 1 },
    { src: '/t6.jpg', alt: 'Student', col: 2, order: 2 },

    // Column 3
    { src: '/about.jpeg', alt: 'About', col: 3, order: 1 },
    { src: '/reception.jpeg', alt: 'Reception', col: 3, order: 2 },

    // Column 4 (centered)
    { src: '/c3.jpg', alt: 'Column 4', col: 4 },
]

export default function Grid() {
    const cols = [1, 2, 3, 4].map((colNum) => {
        const images = IMAGES
            .filter((img) => img.col === colNum)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

        const isCentered = (colNum === 1 || colNum === 4) && images.length === 1

        return (
            <div
                key={colNum}
                className={`flex flex-col flex-shrink-0 gap-y-6 lg:gap-y-8 ${isCentered ? 'justify-center' : ''
                    }`}
            >
                {images.map(({ src, alt }, idx) => {
                    // Determine dimensions based on column
                    const isPortrait = colNum === 2
                    const isLandscape = colNum === 3

                    const width = isPortrait ? 'w-40' : isLandscape ? 'w-64' : 'w-44'
                    const height = isPortrait ? 'h-64' : isLandscape ? 'h-40' : 'h-64'

                    return (
                        <div key={idx} className={`${width} ${height} overflow-hidden rounded-lg`}>
                            <img src={src} alt={alt} className="h-full w-full object-cover object-center" />
                        </div>
                    )
                })}

            </div>
        )
    })

    return (
        <div className="bg-white relative">
            <div className="pt-16 pb-80 lg:pt-20 lg:pb-10">
                <div className="flex flex-col space-y-10  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="w-full justify-center text-center">
                        <h2 className="text-sm  font-semibold">WORK WITH US</h2>
                        <h1 className="text-3xl font-bold mt-2 mb-8">Join us and make a difference</h1>
                    </div>

                    <div>


                        <div className=" flex  items-center justify-center gap-6  ">
                            {cols}
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
