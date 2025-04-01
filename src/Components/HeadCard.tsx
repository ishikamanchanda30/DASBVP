import React from 'react'
import pratham from '../assets/Heads/pratham.jpg'
import ishika from '../assets/Heads/ishika.jpg'
import saanvi from '../assets/Heads/saanvi.jpg'
import yash from '../assets/Heads/yash.jpg'
import teena from '../assets/Heads/teena.jpg'
import shristi from '../assets/Heads/shristi.jpg'
interface HeadMembers {
    name: string,
    position: string,
    image: string,
}

const HeadCard = () => {
    const heads: HeadMembers[] = [
        {
            name: 'Ishika Manchanda',
            position: 'Social Media & Quizzing',
            image: ishika
        },
        {
            name: 'Naisha Chawla',
            position: 'Sponsorship',
            image: pratham
        },
        {
            name: 'Pratham Chhabra',
            position: 'Video Editing',
            image: pratham
        },
        {
            name: 'Saanvi Karkra',
            position: 'Content and Documentation & Films',
            image: saanvi
        },
        {
            name: 'Shristi Ojha',
            position: 'Design & Social Media',
            image: shristi
        },
        {
            name: 'Teena Kaintura',
            position: 'Sponsorship & Quizzing',
            image: teena
        },
        {
            name: 'Vidhi Setiya',
            position: 'Content & Documentation',
            image: pratham
        },
        {
            name: 'Yash Kaul',
            position: 'Design',
            image: yash
        },
    ]
    return (
        <div className="flex flex-row w-full justify-center items-center text-gray-300  ">
            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10 w-full md:w-4/5">
                {heads.map((head, index) => (
                    <div key={index} className="relative h-90 w-4/5 overflow-hidden rounded-xl md:w-1/5">
                        <div className="absolute inset-0 "></div>
                        <div className="absolute inset-0">
                            <img
                                src={head.image}
                                alt={head.name}
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 p-5 z-20 ">
                            <div className="text-2xl font-bold text-white ">{head.name}</div>
                            <div className="text-sm text-gray-300">{head.position}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeadCard