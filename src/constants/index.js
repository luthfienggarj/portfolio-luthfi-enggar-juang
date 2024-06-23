import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    salesforce,
    meta,
    starbucks,
    ojk,
    setkab,
    erajaya,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bootstrap,
    laravel,
    rizki,
    restaurant,
    jdih,
    todo,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Web Developer",
        icon: mobile,
    },
    {
        title: "Quality Assurance",
        icon: backend,
    },
    {
        title: "Digital Marketing",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "salesforce",
        icon: salesforce,
    },
    {
        name: "laravel",
        icon: laravel,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "Quality Assurance",
        company_name: "Otoritas Jasa Keuangan",
        icon: ojk,
        iconBg: "#383E56",
        date: "June 2023 - July 2023",
        points: [
            "Responsible for creating mapping or traceability matrices to ensure comprehensive test coverage, aligning business requirements with test cases and over 20 bug findings in two projects.",
            "Execute through testing procedures to validate software functionality, identify defects, and then generate comprehensive test reports that provide insights into the testing process, highlight identified defects, and offer recommendations for improvement",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Sekretariat Kabinet RI",
        icon: setkab,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Oct 2023",
        points: [
            "Website Redesign: Independently spearheaded the comprehensive redesign of the Jaringan Dokumentasi dan Informasi Hukum public website, implementing modern design with using React.js & Bootstrap Framework principles and responsive web development techniques to enhance user experience and visual appeal",
            "Solo Project Management: Solely managed the entire project, from initial concept to deployment, showcasing strong projectmanagement skills by consistently meeting deadlines, effectively prioritizing tasks, and maintaining a streamlined workflow throughout the development process.",
        ],
    },
    {
        title: "Salesforce Digital Experience",
        company_name: "Erajaya",
        icon: erajaya,
        iconBg: "#383E56",
        date: "Feb 2024 - July 2024",
        points: [
            "Excelled during a 5-month internship at Erajaya within the Eraspace (E-commerce) as an HTML Designer and Salesforce Digital Experience Specialist contributing to engaging popup campaigns, conducting data analysis, and implementingcoding solutions, while also actively involved in the creation of data segments using Salesforce",
            "Demonstrated proficiency in Data analyst, Data Modelling, User Segment Collect Data, Data Analysis, Coding and Reports using Salesforce during a 5-month internship at Erajaya. Engaged in comprehensive data analysis and played a key role in segment creation using the Salesforce platform, showcasing a holistic approach to digital experience enhancement.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I have collaborated with Luthfi, and he is a good web developer. He developed our project very well.",
        name: "Rizki Muhammad",
        designation: "Student",
        company: "Mercu Buana University",
        image: rizki,
    },
    {
        testimonial:
            "He completed the redesign project I gave him. He did his best, even working on it solo, and he has great skills as a frontend developer.",
        name: "Kholid",
        designation: "Software Engineer Manager",
        company: "Sekretariat Kabinet RI",
        image: "https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
    },
    {
        testimonial:
            "As a Quality Assurance, Luthfi demonstrates critical thinking, strong analytical abilities, attention to detail, teamwork, and problem-solving skills.",
        name: "Hamdan",
        designation: "Analyst",
        company: "Information System Quality & Management",
        image: "https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
    },
];

const projects = [
    {
        name: "Fullstack Todo List",
        description:
            "Web app fullstack using next.js, react, tailwind and mongo DB. Properly website with CRUD feature, API and good web design",
        tags: [
            {
                name: "next",
                color: "silver-text-gradient",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: todo,
        source_code_link: "https://github.com/",
    },
    {
        name: "JDIH Setkab",
        description:
            "Public goverment web application that enables users to search for product of law of Sekretariat Kabinet, with good search engine, API, modern technology and faster website",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "api",
                color: "red-text-gradient",
            },
        ],
        image: jdih,
        source_code_link: "https://github.com/",
    },
    {
        name: "Grilli Restaurant",
        description:
            "A comprehensive restaurant platform that allows customer to booking, find menus, reservation, testimonials and contact",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "pink-text-gradient",
            },
        ],
        image: restaurant,
        source_code_link: "https://luthfienggarj.github.io/resto-ayam/",
    },
];

export { services, technologies, experiences, testimonials, projects };