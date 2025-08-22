import pratham from '../assets/Heads/pratham.jpg'
import ishika from '../assets/Heads/ishika.jpg'
import saanvi from '../assets/Heads/saanvi.jpg'
import yash from '../assets/Heads/yash.jpg'

interface CoreTeam {
    name: string,
    image: string,
    position: string,
    desc: string,
}
const coreTeam: CoreTeam[] = [
    {
        name: "Ishika Manchanda",
        image: ishika,
        position: "President",
        desc: "Leading the vision of the Digital Arts Society and guiding the team toward creative excellence."
    }, 
    {
        name: "Saanvi Karkra",
        image: saanvi,
        position: "Vice President",
        desc: "Guiding our Creative Studio's vision while encouraging individual artistic development."
    },
    {
        name: "Pratham Chhabra",
        image: pratham,
        position: "General Secretary",
        desc: "Guiding our Creative Studio's vision while encouraging individual artistic development."
    },
    {
        name: "Yash Kaul",
        image: yash,
        position: "Treasurer",
        desc: "Managing resources responsibly while supporting every initiative's success."
    }
]
export default coreTeam;