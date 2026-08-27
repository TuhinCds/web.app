const MyInfo = {
    MyGenarelInfo: {
        liveIn: "Bangladesh",
        homeDescription: "Iam a Learner, i have expenrience in JavaScript, Node.js, C, C++, Go, RUST, Python and various web development frameworks.",
        IamInInternet: [
            {name: "Email", title: "• EMAIL", sortLink: "tuhin433@gmail.com", link: `mailto:tuhin433@gmail.com?subject=Hello&body=I want to talk to you`, icon: `<i class="fa-solid fa-envelope-circle-check"></i>`},
            {name: "Phone", title: "Calling number",sortLink: "+8801314383497", link: `tel:+8801314383497`, icon: `<i class="fa-solid fa-mobile-vibrate"></i>`},
            {name: "Location", title: "• Location",sortLink: "Rajshahi, bangladesh", link: `https://maps.app.goo.gl/hemWNYXJhphVuAZH8`, icon: `<i class="fa-solid fa-location-arrow"></i>`},
            {name: "Github", title: "Github profile",sortLink: "TuhinCds", link: `https://github.com/TuhinCds`, icon: `<i class="fa-brands fa-github-alt"></i>`}
        ]
    },
    Education: {
        eduNames: [
            {id: 1, eduS: "SSC", eduFullName: "Secondary School Certificate", GPA: "4.28", status: "done", Catagory: "Science", year: "2021 - 2025", organizationName: "Amgachi shahar banu high school"},
            {id: 2, eduS: "HSC", eduFullName: "Higher Secondary Certificate", GPA: "", status: "running_study", Catagory: "Science", year: "2025", organizationName: "Islamia collage, Rajshahi"}
        ]
    },
    myExperience: [
        
    ],
    AboutMe: {
        aboutMeImgConfig: {
            slideTime: 5,
            imgClass: "active",
            aboutMeImgs: [
                {img: "aboutMeImg1.png"},
                {img: "aboutMeImg2.png"},
                {img: "aboutMeImg3.png"},
                {img: "aboutMeImg4.png"},
            ]
        },
        aboutMeTitle: `<i class="fa-solid fa-code"></i> Hello, Iam Tuhin and Iam a Learner`,
        aboutMeDescription: `Hey! I'm Md Tuhin, a young developer and <span class="mark-red">tech</span> explorer who loves turning ideas into real, functional creations. I'm genuinely passionate about technology—whether it's coding, electronics, or building smart systems—and I enjoy learning how things work behind the scenes.
                             I see <span class="mark-blue">technology as a space where creativity</span> meets logic. That's why I spend my time experimenting with new concepts, <span class="mark-orange">learning modern development </span> skills, and building projects that help me grow step by step. From web development to automation and innovative tech solutions, I'm always excited to create something meaningful.
                             I believe progress comes from curiosity, consistency, and the courage to try. Every <span class="mark-white">project I build</span>, no matter how small, teaches me something new and pushes me closer to the future I'm working for.
                             In short: I love learning, I love building, and I'm committed to becoming better every single day. 🚀`,
        

    },
    Logo: {
        LogoName: {
            logoIcon:  ``,
            logo: "tuhin",
            header: "",
            footer: "",
            sidebar: "",
        },
    },
    MyInterrest: {
        MyInterrestIn: "Love Computer Science and Technology"
    },
    Hide_repos: ["web.app", "facboClo", "TuhinCds", "Solving-Challenges-C", "desktop-tutorial", "Anki"]
    
}
export {MyInfo}
export const What_im = [
    'Student',
    'Critical thinker',
    'Problem solver',
    'Lifelong learner',
    'Team player',
    'Creative mind',
    'Learner'
]






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
            option: '',
            link: '',
            icon: '',
            target: '',
            selected: false,
        },
    ]
}

export const projects = {
    Recent_Projects: [
        // {
        // images: [
        //     {img: 'noteProjectIm9.png', title: ["", 10], link: ""},
        //     {img: 'noteProjectIm1.png', title: ["", 10], link: ""},
        //     {img: 'noteProjectIm2.png', title: ["", 10], link: ""},
        //     {img: 'noteProjectIm4.png', title: ["", 10], link: ""},
        //     {img: 'noteProjectIm5.png', title: ["", 10], link: ""},
        //     {img: 'noteProjectIm7.png', title: ["", 10], link: ""},
        // ],
        // title: 'NoteEve - Note Everything',
        // title_icon: '<i class="fa-solid fa-notes-medical"></i>',
        // description: 'If you want a note that will refresh your mind and you can <span class="mark-blue">write anything</span> at once that will be saved, you can delete, edit and do many more things as you wish. This is not just a note, it will make your life a little easier. This website includes many things such as a calculator, you can track how much money you are spending or earning and you will have an account of everything.',
        // Used_in_project: [
        //     { component: 'JavaScript' },
        //     { component: 'Data Stucture' },
        //     { component: 'file managements' },
        //     { component: 'other component' },
        // ],
        // code_link: 'https://github.com/TuhinCds/NoteEve.git',
        // preview_link: 'https://tuhincds.github.io/NoteEve/',
        // target: '_blank',
        // status: '',

        // },
        {
        images: [
            {img: 'ccp3.png', title: ["", 10], link: ""},
            {img: 'ccp1.png', title: ["", 10], link: ""},
            {img: 'ccp4.png', title: ["", 10], link: ""}
        ],
        title: 'Currency Convarter',
        title_icon: '<i class="fa-solid fa-bitcoin-sign"></i>',
        description: 'Auto updated currency convarter',
        Used_in_project: [
            { component: 'JavaScript' },
            { component: "API's" },
            { component: 'other component' },
        ],
        code_link: 'https://github.com/TuhinCds/CurrencyConverter.git',
        preview_link: 'https://tuhincds.github.io/CurrencyConverter/',
        target: '_blank',
        status: '',

        },
        {
        images: [
            {img: 'bmiProjectim1.png', title: ["", 10], link: ""},
            {img: 'bmiProjectim2.png', title: ["", 10], link: ""},
        ],
        title: 'BMI scale calculator',
        title_icon: '<i class="fa-solid fa-weight-hanging"></i>',
        description: 'It can track your body. If you input your body weight, height, age, it will automatically suggest what you should do. For example, if you are very thin, it will tell you how to get fit or gain weight in a healthy way. <span class="mark-orange">(my old project)</span>',
        Used_in_project: [
            { component: 'HTML' },
            { component: 'CSS' },
            { component: 'JavaScript' },
        ],
        code_link: 'https://github.com/TuhinCds/BMI-calc.web.git',
        preview_link: 'https://tuhincds.github.io/BMI-calc.web/',
        target: '_blank',
        status: '',
    },
    {
        images: [
            {img: 'project2.png', title: ["", 10], link: ""}
        ],
        title: 'Full Form Finder API',
        title_icon: '<i class="fa-solid fa-arrow-up-right-dots"></i>',
        description: 'if you search a sort form  so it find the full form.',
        Used_in_project: [
            { component: 'HTML' },
            { component: 'CSS' },
            { component: 'JavaScript' },
            { component: 'node.js' },
            { component: 'MongoDB'}
        ],
        code_link: 'https://github.com/TuhinCds/FullForm_Finder.web.git',
        preview_link: '',
        target: '_blank',
        status: '',
    },
    {
        images: [
            {img: 'project4.png', title: ["", 10], link: ""}
        ],
        title: 'Aritificial Inteligence Robot',
        title_icon: '<i class="fa-solid fa-robot"></i>',
        description: 'Ai Robot stions, class schet',
        Used_in_project: [
            { component: 'Arduino programming' },
            { component: '' },
            { component: 'Arduino uno, and other devices' },
            { component: 'Python' },
            {component: "other component"}
        ],
        code_link: '',
        preview_link: '',
        target: '',
        status: 'upcoming',
    }
    
    
    
    ],

}
export const SkillsAndTools = {
    Skills_Data: [
        {
            header_title: 'Programing Languages',
            title: 'programing',
            description: "I'm knowing programming languages",
            icon: '<i class="fa-solid fa-code"></i>',
            skills: [
                {skill: "Python", parcent: 70},
                {skill: "Java", parcent: 8},
                {skill: "JavaScript", parcent: 80},
                {skill: "C", parcent: 80},
                {skill: "C++", parcent: 90},
                {skill: "RUST", parcent: 10},
            ],

        },{
            header_title: 'Web development',
            title: "",
            description: "I'm knowing web develpment programming languages",
            icon: '<i class="fa-solid fa-tv"></i>',
            skills: [
                {skill: "JavaScript", parcent: 40},
                {skill: "Node.js", parcent: 90},
                {skill: "MongoDB", parcent: 70},
            ],

            
        },

        {
            header_title: 'Tools & Platforms',
            title: 'Tools & Platforms',
            description: "Iam Learning Tools & Platforms",
            icon: '<i class="fa-solid fa-trowel-bricks"></i>',
            skills: [
                {skill: "Git/GitHub", parcent: 60},
                {skill: "VS Code", parcent: 80},
                {skill: "PlatformIO", parcent: 30},
            ],
            
        },
        {
            header_title: 'Robotics',
            title: 'Robotics',
            description: "I knowing Robotics ",
            icon: '<i class="fa-solid fa-robot"></i>',
            skills: [
                {skill: "Arduino programing", parcent: 50},
                {skill: "C++", parcent: 10},
                {skill: "Sensors", parcent: 40},
                {skill: "C", parcent: 60}
            ],
        },
        {
            header_title: 'Databases',
            title: 'Databases',
            description: "I knowing Database",
            icon: '<i class="fa-solid fa-database"></i>',
            skills: [
                {skill: "MongoDB", parcent: 80},
            ],
        },
        
    
    ],
    Tools_Data: [

    ]
}

  