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
export default heads