const MyInfo = {
    MyGenarelInfo: {
        liveIn: "Bangladesh",
        homeDescription: "Iam a Learner, i have expenrience in JavaScript, Node.js, database, C/C++, Go, RUST, Python and various web development frameworks.",
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
        aboutMeDescription: `Hey! I'm Md Tuhin, a young developer and <span class="mark-red">tech</span> explorer who loves turning ideas into real, functional creations. I'm genuinely passionate about technology—whether it's programming, or building smart systems—and I enjoy learning how things work behind the scenes.
                             I see <span class="mark-blue">technology as a space where creativity</span> meets logic. That's why I spend my time experimenting with new concepts, <span class="mark-orange">learning modern development </span> skills, and building projects that help me grow step by step. From web development to system programming and innovative tech solutions, I'm always excited to create something meaningful.
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
            {img: 'telegram-cloud-photo-size-5-6210606569712456099-w.jpg', title: ["", 10], link: ""},
            {img: 'image-p2-2.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.10.44 AM.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.13.19 AM.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.18.17 AM.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.24.24 AM.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.54.58 AM.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.55.17 AM.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.56.50 AM.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.58.19 AM.png', title: ["", 10], link: ""},
            {img: 'Screenshot 2026-10-07 at 11.10.57 AM.png', title: ["", 10], link: ""},
        ],
        title: "A Smart Room controler with Inteligent",
        title_icon: '<i class="fa-solid fa-gear"></i>',
        description: `
<div class="project-documentation">

  <header class="project-header">
    <p>
      A real-time IoT-based smart room management platform for monitoring,
      controlling, automating, and synchronizing room devices through
      software, physical switches, and Telegram.
    </p>
  </header>


  <section class="project-section">
    <h2>1. Smart Home Dashboard</h2>

    <p>
      The <span>Home Screen</span> provides a real-time overview of the
      connected room.
    </p>

    <ul>
      <li>View all configured switches.</li>
      <li>Turn switches ON/OFF in real time.</li>
      <li>View the current status of each switch.</li>
      <li>Control devices connected to the room controller.</li>
      <li>View live room temperature and humidity.</li>
      <li>Synchronize device state across connected clients.</li>
    </ul>

    <p>
      Any change made from the software, physical switch, Telegram, or
      automation system is synchronized across the entire system.
    </p>
  </section>


  <section class="project-section">
    <h2>2. Device Activity Monitor</h2>

    <p>
      The <span>Device Activity</span> page provides a live event stream
      of everything happening on the connected device.
    </p>

    <ul>
      <li>Switch ON/OFF events</li>
      <li>Physical button events</li>
      <li>Device connection and disconnection</li>
      <li>Configuration changes</li>
      <li>User actions</li>
      <li>Automated actions</li>
    </ul>

    <p>
      Each activity can include the event type, switch name, previous
      and current status, user information, timestamp, and action source.
    </p>
  </section>


  <section class="project-section">
    <h2>3. Physical Switch Configuration</h2>

    <p>
      The system supports physical switches or buttons connected directly
      to controller GPIO pins.
    </p>

    <h3>Example Configuration</h3>

    <ul>
      <li>GPIO 5 → Bedroom Light</li>
      <li>GPIO 6 → Room Fan</li>
      <li>GPIO 7 → Main Light</li>
    </ul>

    <p>
      Users can select a GPIO pin and assign it to a software switch.
      When the physical button is pressed, the assigned switch receives
      the corresponding event automatically.
    </p>

    <ul>
      <li>Physical switch name</li>
      <li>GPIO/input pin</li>
      <li>Target software switch</li>
      <li>Button behavior</li>
      <li>Enabled/disabled status</li>
    </ul>
  </section>


  <section class="project-section">
    <h2>4. Switch Management</h2>

    <p>
      Users can dynamically manage all software-controlled switches.
    </p>

    <ul>
      <li>Create a switch</li>
      <li>Update a switch</li>
      <li>Delete a switch</li>
      <li>Rename a switch</li>
      <li>Change switch configuration</li>
      <li>Enable or disable a switch</li>
      <li>Control switch state</li>
    </ul>
  </section>


  <section class="project-section">
    <h2>5. Timer & Automation</h2>

    <p>
      The <span>Timer</span> section allows users to schedule automated
      device actions.
    </p>

    <ul>
      <li>Select a target switch.</li>
      <li>Select an ON/OFF action.</li>
      <li>Set a delay or duration.</li>
      <li>Set an execution time.</li>
      <li>Enable or disable the timer.</li>
    </ul>

    <p>
      <strong>Example:</strong>
      Turn OFF Bedroom Light after 30 seconds.
    </p>
  </section>


  <section class="project-section">
    <h2>6. Multi-Device & Real-Time Synchronization</h2>

    <p>
      Multiple users and clients can connect to the same smart room.
      Every device state change is synchronized in real time.
    </p>

    <ol>
      <li>User A toggles a light ON.</li>
      <li>The controller receives the command.</li>
      <li>The physical device changes state.</li>
      <li>The server updates the device state.</li>
      <li>All connected clients receive the updated state.</li>
      <li>Telegram can send a notification.</li>
      <li>The activity monitor records the event.</li>
    </ol>
  </section>


  <section class="project-section">
    <h2>7. Device Authentication & Login</h2>

    <p>
      The system includes a multi-step authentication mechanism to
      protect device access.
    </p>

    <ol>
      <li>User provides the required information.</li>
      <li>The system validates the information.</li>
      <li>Email verification is completed.</li>
      <li>Available active devices are displayed.</li>
      <li>The user selects a device.</li>
      <li>The user authenticates using the device password.</li>
      <li>Access is granted according to the user's permissions.</li>
    </ol>
  </section>


  <section class="project-section">
    <h2>8. Device Management & Settings</h2>

    <ul>
      <li>View connected device information.</li>
      <li>Connect or disconnect from a device.</li>
      <li>Switch between available devices.</li>
      <li>Manage device access.</li>
      <li>Configure device settings.</li>
      <li>View device status.</li>
    </ul>
  </section>


  <section class="project-section">
    <h2>9. Telegram Integration</h2>

    <p>
      Telegram works as an additional control interface for the smart
      room. After authentication, users can remotely monitor and control
      their device through Telegram.
    </p>

    <h3>Example Commands</h3>

    <p>
      <code>show switches</code>
    </p>

    <p>
      <code>show physical switches</code>
    </p>

    <p>
      <code>turn on light</code>
    </p>

    <p>
      <code>turn off bedroom light</code>
    </p>

    <p>
      The system can interpret different natural-language variations of
      the same command and map them to the correct device action.
    </p>
  </section>


  <section class="project-section">
    <h2>10. Telegram Notifications</h2>

    <p>
      Telegram can also be used as a real-time notification channel.
    </p>

    <div class="notification-example">

      <p>
        <strong>Room Environment Update</strong>
      </p>

      <ul>
        <li>Temperature: <span>27.4°C</span></li>
        <li>Humidity: <span>61%</span></li>
        <li>Device: <span>Room Controller #01</span></li>
        <li>Event: <span>Room environment updated</span></li>
      </ul>

    </div>
  </section>


  <section class="project-section">
    <h2>11. Real-Time User Activity Notifications</h2>

    <p>
      Whenever a connected user performs an action, the event can appear
      in the software and be sent to Telegram.
    </p>

    <div class="activity-example">

      <p>
        <strong>User:</strong>
        <span>Tuhin</span>
      </p>

      <p>
        <strong>Profile:</strong>
        <span>User Profile Image</span>
      </p>

      <p>
        <strong>Action:</strong>
        <span>Bedroom Light → ON</span>
      </p>

      <p>
        <strong>Source:</strong>
        <span>Software</span>
      </p>

      <p>
        <strong>Device:</strong>
        <span>Room Controller #01</span>
      </p>

      <p>
        <strong>Time:</strong>
        <span>01:42 PM</span>
      </p>

    </div>
  </section>


  <section class="project-section">
    <h2>12. Unified Control Architecture</h2>

    <p>
      All control interfaces communicate with the same real-time device
      state.
    </p>

    <pre>
                    ┌─────────────────────┐
                    │   Room Controller   │
                    │      IoT Device     │
                    └──────────┬──────────┘
                               │
                     Real-Time State Sync
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
   Software App          Physical Switches        Telegram
        │                      │                      │
        └──────────────────────┼──────────────────────┘
                               │
                               ▼
                     Unified Device State
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
         Dashboard        Activity Log      Notifications
    </pre>
  </section>


  <section class="project-section">
    <h2>13. Core System Capabilities</h2>

    <ul>
      <li>Real-Time Device Control</li>
      <li>Real-Time Synchronization</li>
      <li>Smart Switch Management</li>
      <li>Physical GPIO Mapping</li>
      <li>Temperature Monitoring</li>
      <li>Humidity Monitoring</li>
      <li>Live Activity Monitoring</li>
      <li>Timers & Automation</li>
      <li>Multi-User Access</li>
      <li>Authentication & Authorization</li>
      <li>Email Verification</li>
      <li>Telegram Control</li>
      <li>Intelligent Command Interpretation</li>
      <li>Telegram Notifications</li>
      <li>User Activity Tracking</li>
      <li>Device Management</li>
      <li>Multi-Device Support</li>
    </ul>
  </section>


  <section class="core-principle">
    <h2>Core System Principle</h2>

    <p>
      One device state, multiple control interfaces,
      real-time synchronization.
    </p>
  </section>

</div>

`,
        Used_in_project: [
            { component: 'JavaScript' },
            { component: 'C++' },
            { component: "API's" },
            { component: "WebSocket" },
            { component: 'express.js' },
            { component: 'MongoDB' },
            { component: 'Cloudinary' },
            { component: 'Telegram API' },
            { component: 'ESP 8266' },
            { component: 'other component' },
        ],
        code_link: 'https://github.com/TuhinCds',
        preview_link: 'https://github.com/TuhinCd',
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
        title: 'Full Form Finder',
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
        description: 'Just for Testing... [small]',
        Used_in_project: [
            { component: 'C/C++' },
            { component: '' },
            { component: 'Arduino uno, and other devices' },
            { component: 'Python' },
            { component: "Local server"},
            { component: "MongoDB"},
            {component: "other components"}
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

  