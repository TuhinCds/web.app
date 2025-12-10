export const appNavigation = {
    Nav: [
        {
            option: 'Home',
            link: '#heroSection',
            icon: '<i class="fa-solid fa-house"></i>',
            target: '',
            selected: true,
        },
        {
            option: 'About me',
            link: '#AboutMe',
            icon: '<i class="fa-solid fa-fire"></i>',
            target: '',
            selected: false,
        },
        {
            option: 'Projects',
            link: '#projects-section',
            icon: '<i class="fa-solid fa-diagram-project"></i>',
            target: '',
            selected: false,
        },
        {
            option: 'Skills',
            link: '#skills-section',
            icon: '<i class="fa-solid fa-medal"></i>',
            target: '',
            selected: false,
        },
        {
            option: 'Contact',
            link: '#Contact',
            icon: '<i class="fa-solid fa-address-book"></i>',
            target: '',
            selected: false,
        },
        {
            option: 'Privacy policy',
            link: '',
            icon: '<i class="fa-solid fa-shield-halved"></i>',
            target: '',
            selected: false,
        },
        {
            option: '',
            link: '',
            icon: '',
            target: '',
            selected: false,
        },
    ]
}
export const What_im = [
    'Web developer',
    'Critical thinker',
    'Problem solver',
    'Lifelong learner',
    'Team player',
    'Creative mind',
    'App developer',
    
]
export const projects = {
    Recent_Projects: [
        {
        image: 'project1.png',
        title: 'BMI scale with AI',
        title_icon: '<i class="fa-solid fa-code"></i>',
        description: 'An all-in-one student assistant for BSCSE students of NSU. Features academic progress tracking, course information, personalized course suggestions, class scheduling, and CGPA calculation with multi-user support',
        Used_in_project: [
            { programing_lang: 'HTML & CSS' },
            { programing_lang: 'JavaScript' },
            { programing_lang: 'localStorage' },
            { programing_lang: 'Teilwind Css' },
            { programing_lang: 'Python' },
        ],
        code_link: 'https://github.com/TuhinCds/BMI-calc.web.git',
        preview_link: 'https://tuhincds.github.io/BMI-calc.web/',
        target: '_blank',
        status: '',
    },
    {
        image: 'project2.png',
        title: 'Full Form Finder',
        title_icon: '<i class="fa-solid fa-arrow-up-right-dots"></i>',
        description: 'An all-in-one student assistant for BSCSE students of NSU. Features academic progress tracking, course information, personalized course suggestions, class scheduling, and CGPA calculation with multi-user support',
        Used_in_project: [
            { programing_lang: 'html' },
            { programing_lang: 'css' },
            { programing_lang: 'javaScript' },
            { programing_lang: 'LocalStorage' }
        ],
        code_link: 'https://github.com/TuhinCds/FullForm_Finder.web.git',
        preview_link: 'https://tuhincds.github.io/FullForm_Finder.web/',
        target: '_blank',
        status: 'new',
    },
    {
        image: 'project3.png',
        title: 'Math solver AI',
        title_icon: '<i class="fa-solid fa-code"></i>',
        description: 'An all-in-one student assistant for BSCSE students of NSU. Features academic progress tracking, course information, personalized course suggestions, class scheduling, and CGPA calculation with multi-user support',
        Used_in_project: [
            { programing_lang: 'C' },
            { programing_lang: 'Data Stucture' },
            { programing_lang: 'File Manegement' },
            { programing_lang: 'CLI' },
            { programing_lang: 'Python' }
        ],
        code_link: '',
        preview_link: '',
        target: '',
        status: 'featured',
    },
    {
        image: 'project4.png',
        title: 'Ai Robot',
        title_icon: '<i class="fa-solid fa-robot"></i>',
        description: 'Ai Robot stions, class schet',
        Used_in_project: [
            { programing_lang: 'C language' },
            { programing_lang: 'Data Stucture' },
            { programing_lang: 'Arduino uno' },
            { programing_lang: 'cicuits' },
            { programing_lang: 'Python' },
            {programing_lang: "component"}
        ],
        code_link: '',
        preview_link: '',
        target: '',
        status: 'featured',
    },
    {
        image: 'project5.png',
        title: 'Facebook Clone website',
        title_icon: '<i class="fa-brands fa-square-facebook"></i>',
        description: 'This is my own Facebook website made by me , its totaly clone',
        Used_in_project: [
            { programing_lang: 'React js' },
            { programing_lang: 'Teliwind css' },
            { programing_lang: 'Data Stucture' },
            { programing_lang: 'Python' },
            { programing_lang: 'other component' },
        ],
        code_link: 'https://github.com/TuhinCds/facboClo.git',
        preview_link: 'https://tuhincds.github.io/facboClo/',
        target: '_blank',
        status: 'featured',

        },
    ],

}
export const SkillsAndTools = {
    Skills_Data: [
        {
            header_title: 'Programing Lang',
            title: 'programing',
            description: "I'm khowing programming langguage",
            icon: '<i class="fa-solid fa-code"></i>',
            skills: [
                {skill: "Python", parcent: 30},
                {skill: "Java", parcent: 8},
                {skill: "JavaScript", parcent: 60},
                {skill: "PHP", parcent: 10}
            ],

            
        },{
            header_title: 'Web development',
            title: 'Web development',
            description: "I'm khowing web develpment programming langguage",
            icon: '<i class="fa-solid fa-tv"></i>',
            skills: [
                {skill: "HTML", parcent: 90},
                {skill: "CSS", parcent: 70},
                {skill: "JavaScript", parcent: 56},
                {skill: "MySQL", parcent: 10},
                {skill: "C", parcent: 40}
            ],

            
        },
        {
            header_title: 'App development',
            title: 'App development',
            description: "I'm khowing App develpment programming langguage",
            icon: '<i class="fa-solid fa-laptop-code"></i>',
            skills: [
                {skill: "Java", parcent: 20},
                {skill: "C++", parcent: 10},
                {skill: "C", parcent: 56},
                {skill: "JavaScript", parcent: 50},
                {skill: "Swift", parcent: 10},
            ],

            
        },

        {
            header_title: 'Tools & Platforms',
            title: 'Tools & Platforms',
            description: "Iam Learning Tools & Platforms",
            icon: '<i class="fa-solid fa-trowel-bricks"></i>',
            skills: [
                {skill: "Git/GitHub", parcent: 40},
                {skill: "Firebase", parcent: 20},
                {skill: "VS Code", parcent: 80},
                {skill: 'Photoshop', parcent: 30}
            ],
            
        },
        {
            header_title: 'Robotics',
            title: 'Robotics',
            description: "I khow Robotics ",
            icon: '<i class="fa-solid fa-robot"></i>',
            skills: [
                {skill: "C", parcent: 20},
                {skill: "C++", parcent: 10},
                {skill: "Circuit design", parcent: 6},
                {skill: "Sensors", parcent: 40},
            ],

            
        },
    
    ],
    Tools_Data: [

    ]
}