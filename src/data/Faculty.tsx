import faculty from '../assets/faculty.jpg';
interface FacultyMember {
    name: string;
    description: string;
    role: string;
    imageUrl: string;
}

const facultyMembers: FacultyMember[] = [
    {
        name: "DR. ARVIND REHALIA",
        description: "Lorem ipsum dolor sit amet consectetur. Enim est sit gravida tempus urna ut mi eget sagittis. Posuere enim velit vel a molestie eu penatibus sed blandit. Magna mi dui vulputate pellentesque hendrerit elit.",
        role: "DAS MEMBER",
        imageUrl: faculty
    },
    {
        name: "DR. ARVIND REHALIA",
        description: "Lorem ipsum dolor sit amet consectetur. Enim est sit gravida tempus urna ut mi eget sagittis. Posuere enim velit vel a molestie eu penatibus sed blandit. Magna mi dui vulputate pellentesque hendrerit elit.",
        role: "DAS MEMBER",
        imageUrl: faculty
    },

];

export default facultyMembers