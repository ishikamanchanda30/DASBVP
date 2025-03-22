import faculty from '../assets/faculty.png';
const Card = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-black text-white p-6">
            <div className="relative flex w-full max-w-lg">

                <div className="w-3/5 relative">

                    <div className="absolute top-4 left-4 z-10">
                        <div className="h-56 w-56 overflow-hidden shadow-lg transform -rotate-6">
                            <img
                                src= {faculty}
                                alt="Black and white dog portrait"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="absolute top-12 left-12">
                        <div className="h-56 w-56 overflow-hidden shadow-lg transform rotate-3">
                            <img
                                src= {faculty}
                                alt="Secondary black and white photo"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>


                <div className="w-2/5 flex flex-col justify-center">
                    <div className="mb-1">
                        <h2 className="text-lg font-medium tracking-wide">DAS MEMBER</h2>
                    </div>
                    <div className="mb-12">
                        <a href="#" className="text-sm underline hover:no-underline">View Work</a>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-wide">FACULTY</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;