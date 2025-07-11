import faculty from '../assets/faculty.jpg';
import faculty2 from '../assets/faculty2.png'
interface FacultyMember {
    name: string;
    description: string;
    role: string;
    imageUrl: string;
}

const facultyMembers: FacultyMember[] = [
    {
        name: "DR. ARVIND REHALIA",
        description: "Dr. Arvind Rehalia is an educator and innovator with over 18 years of experience in teaching, research, and entrepreneurship. He’s currently an Associate Professor in IT at Bharati Vidyapeeth’s College of Engineering, New Delhi. ",
        role: "FACULTY",
        imageUrl: faculty
    },
    {
        name: "DR. ARVIND REHALIA",
        description: "Passionate about nurturing startups, he leads the college's Entrepreneurship Development Cell. Dr. Rehalia brings a unique blend of technical and leadership skills to everything he does.",
        role: "FACULTY",
        imageUrl: faculty2
    },

];

export default facultyMembers