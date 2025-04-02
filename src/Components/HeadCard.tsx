import heads from '../data/Teams'

const HeadCard = () => {
    return (
        
            <div className="flex flex-wrap justify-between items-center gap-x-20 gap-y-10 w-full md:w-4/5 h-[80%] w-full">
                {heads.map((head, index) => (
                    <div key={index} className="relative h-[45%] w-4/5 overflow-hidden rounded-xl md:w-1/5">
                        <img
                            src={head.image}
                            alt={head.name}
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute bottom-0 left-0 p-5 z-20 ">
                            <div className="text-2xl font-bold text-white ">{head.name}</div>
                            <div className="text-sm text-gray-300">{head.position}</div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default HeadCard