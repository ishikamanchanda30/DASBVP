import uday from "../assets/Core/uday.jpg"
import vansh from "../assets/Core/vansh.jpg"
import pranaya from "../assets/Core/pranaya.jpg"
import raman from "../assets/Core/raman.jpg"

interface CoreTeam {
    name: string,
    image: string,
    position: string,
    desc: string,
}
const coreTeam: CoreTeam[] = [
    {
        name: "Vansh Gupta",
        image: vansh,
        position: "President",
        desc: "Leading the vision of the Digital Arts Society and guiding the team toward creative excellence."
    }, 
    {
        name: "Pranaya Bansal",
        image: pranaya,
        position: "Vice President",
        desc: "Guiding our Creative Studio's vision while encouraging individual artistic development."
    },
    {
        name: "Uday Singh Pundeer",
        image:uday,
        position: "General Secretary",
        desc: "Guiding our Creative Studio's vision while encouraging individual artistic development."
    },
    {
        name: "Raman",
        image: raman,
        position: "Chapter Officer",
        desc: "Guiding our Creative Studio's vision while encouraging individual artistic development."
    }
]
export default coreTeam;