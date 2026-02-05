import { appNavigation, What_im, projects, SkillsAndTools, MyInfo} from './data.js'

const themeBtn = document.getElementById('themeBtn')
const themeBtnIcon = themeBtn.querySelector('i')
const html = document.documentElement
const SidebarNav = document.getElementById('SidebarNav')
const TopNav = document.getElementById('TopNav')


// Sidebar 

const sidebar = document.getElementById('sidebar')
const menuToggler = document.getElementById('menuToggler')
const sidebarIcon = menuToggler.querySelector('i')
const overly = document.getElementById('overly')

// Im_What 


const Im_What = document.getElementById('Im_What')

// Project add
const RecentProjects = document.getElementById('RecentProjects')

// website content 
const ShowYear = document.getElementById("ShowYear")
const logoNameAll = document.querySelectorAll(".logoName")
const myintersetShow = document.getElementById("myintersetShow")
const ContactContainer = document.getElementById("ContactContainer")
const LiveIn = document.querySelectorAll(".LiveIn")
const textContentData = document.querySelector(".text-content-data")
const aboutMeImage = document.getElementById("aboutMeImage")
const aboutMeTitle = document.getElementById("aboutMeTitle")
const abouteMeDescriotion = document.getElementById("abouteMeDescriotion")
const TotalProjectCount = document.getElementById("TotalProjectCount")
const projectCount = document.getElementById("projectCount")

// slider imgs 
const AboutMeImage = document.getElementById("AboutMeImage")
const imageSlideBtns = document.querySelector(".imageSlideBtns")

//? THEME TOGGLER AND SET THEME
function Settheme(theme) {
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
}

themeBtn.addEventListener('click', () => {
    const current = html.getAttribute("data-theme")
    Settheme(current === "light" ? "dark" : "light")

    themeBtnIcon.classList.toggle('ri-sun-line')
    themeBtnIcon.classList.toggle('ri-moon-fill')
})

Settheme(localStorage.getItem("theme") || "dark")

if (localStorage.getItem("theme") === "light") {
    themeBtnIcon.classList.remove('ri-sun-line')
    themeBtnIcon.classList.add('ri-moon-fill')
} else {
    themeBtnIcon.classList.add('ri-sun-line')
    themeBtnIcon.classList.remove('ri-moon-fill')
}

//! Set Navigation data from Data.js

let Navigation = appNavigation.Nav.filter(item => item.option !== "")
Navigation.forEach(item => {
    let createDataNav = document.createElement('li')
    createDataNav.innerHTML = `
    <a href="${item.link}" class="nav-link ${item.selected === true ? 'selectedTopNavItem' : ''}">
        <span>${item.option}</span>
    </a>`;
    
    TopNav.appendChild(createDataNav)
    
})


// ------ Scroll Active System (Works With Your nav-link) ------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // reset
            navLinks.forEach(link => link.classList.remove("selectedTopNavItem"));

            // match ID & href
            navLinks.forEach(link => {
                if (link.getAttribute("href").replace("#", "") === entry.target.id) {
                    link.classList.add("selectedTopNavItem");
                }
            });
        }
    });
}, { threshold: 0.6 });

sections.forEach(sec => observer.observe(sec));

Navigation.forEach(item => {
    let createDataNav = document.createElement('li')
    createDataNav.innerHTML = `
    <a href="${item.link}" class=" ${item.selected ? 'selected' : ''}">
        <span class="icon-nav-item">${item.icon}</span>
        <span>${item.option}</span>
    </a>`;
    
    SidebarNav.appendChild(createDataNav)
    let createDataNavLink = createDataNav.querySelector("a")
    createDataNavLink.addEventListener("click", (e) => {
        createDataNavLink.classList.add("selected")
    })

    // Click to toggle sidebar if needed
    let createDataNavData = createDataNav.querySelector('a')
    createDataNavData.addEventListener('click', () => {
        Sidebar()
    })
})

// ----------------------
// Scroll Active System


// Sidebar Section 

function Sidebar() {
    sidebar.classList.toggle('open')
    if ( sidebar.classList.contains('open')) {
        sidebarIcon.classList.remove('fa-bars')
        sidebarIcon.classList.add('fa-xmark')
        ActiveOverly()
    } else {
        sidebarIcon.classList.add('fa-bars')
        sidebarIcon.classList.remove('fa-xmark')
        DeactiveOverly()
    }
}
menuToggler.addEventListener('click', () => {
    Sidebar()
})
CloseSidebar.addEventListener("click", () => {
    Sidebar()
})

function ActiveOverly() {
    overly.classList.add('active')
}
function DeactiveOverly() {
    overly.classList.remove('active')
}

overly.addEventListener('click', () => {
    OverlyClickEvents()
})

function OverlyClickEvents() {
    DeactiveOverly()
    Sidebar()
}
// Im_What Animation

let index = 0;
let charIndex = 0;

// random typing speed for human effect
function randomSpeed(min=70,max=150){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function typeWriter(){
    Im_What.style.opacity = 1;
    Im_What.style.transform = 'translateY(0px)';

    const currentWord = What_im[index];

    if(charIndex < currentWord.length){
        Im_What.textContent += currentWord[charIndex];
        charIndex++;
        setTimeout(typeWriter, randomSpeed());
    } else {
        setTimeout(deleteWriter, 1500);
    }
}

function deleteWriter(){
    if(Im_What.textContent.length > 0){
        Im_What.textContent = Im_What.textContent.slice(0,-1);
        setTimeout(deleteWriter, randomSpeed(30,80));
    } else {
        // fade + slide for next word
        Im_What.style.opacity = 0;
        Im_What.style.transform = 'translateY(8px)';

        index = (index+1) % What_im.length;
        charIndex = 0;

        setTimeout(typeWriter, 400);
    }
}

// start typing
typeWriter();

function AddProjects() {
    projects.Recent_Projects.forEach(project => {

        let CreateData = document.createElement('div')
    CreateData.innerHTML = `
                              <div class="project">
                                        <div class="project-wraper">
                                            <div class="project-header">
                                                <div class="header-image-wraper">
                                                    <img src="imgs/project_image/${project.image}" alt="loading...">
                                                    <div class="${project.status ? 'Stutus_Show': 'hide_status'}">
                                                        <p class="${project.status === 'new' ? 'new' :
                                                             project.status === 'old' ? 'old' :
                                                              project.status === 'featured' ? 'featured' : project.status === "later" ? 'later' : 
                                                              project.status === "upcoming" ? "upcoming" : 'hide' }">
                                                               ${project.status === 
                                                                "old" ? `<i class="fa-solid fa-person-cane"></i>` : project.status === "new" ? `<i class="fa-regular fa-folder-open"></i>` : project.status === "featured" ? `<i class="fa-solid fa-feather"></i>` : project.status === "later" ? `<i class="fa-solid fa-layer-group"></i>` : project.status === "upcoming" ? `<i class="fa-regular fa-clock"></i>` : ""
                                                               }
                                                               ${project.status.slice(0, 1).toUpperCase() + project.status.slice(1, 100000).toLowerCase()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="project-body-this">
                                                <div class="project-title">${project.title_icon}&nbsp;${project.title.length > 40 ? project.title.slice(0, 40) + "..." : project.title}</div>
                                                <div class="project-description">${project.description.length > 160 ? project.description.slice(0, 160) + "..." : project.description}</div>
                                                <div class="Used_in_project">
                                                <!-- Programing Languages -->
                                                </div>
                                                <div class="code-view">
                                                    <a ${project.status === "upcoming" ? "" : `href="${project.code_link}"`} target="${project.target ? project.target : "_blank"}"><i class="fa-brands fa-github"></i>&nbsp;Code</a>
                                                    <a ${project.status === "upcoming" ? `class="upcoming-status"` : `href="${project.preview_link}"`} target="${project.target ? project.target : "_blank"}"><i class="fa-solid fa-arrow-up-right-from-square"></i>Live preview</a>
                                                </div>
                                                
                                      </div>
                                </div>
                        </div>`
    RecentProjects.appendChild(CreateData)

        let data = CreateData.querySelector('.Used_in_project')
        project.Used_in_project.forEach(project_in_used_lang => {
            let createData = document.createElement('button')
            createData.innerHTML = project_in_used_lang.programing_lang

            data.appendChild(createData)
        })
            
    })              
}
AddProjects()


const Get_In_Touch = document.getElementById('Get_In_Touch')
const contact_data = document.querySelector('.contact-data')

const contact_data_tag_a = contact_data.querySelectorAll('a')

Get_In_Touch.addEventListener('mouseover', () => {
    contact_data.classList.add('active')
})
Get_In_Touch.addEventListener('mouseout', () => {
    let timeData = setTimeout(() => {
        contact_data.classList.remove('active')
    }, 5000)

    contact_data_tag_a.forEach(item => {
    item.addEventListener('mouseover', () => {
        clearTimeout(timeData)
        
    })
    item.addEventListener('mouseout', () => {
        timeData = setTimeout(() => {
        contact_data.classList.remove('active')
    }, 3000)
    })
})
})


// Skils container
const SkillsIn = document.getElementById('SkillsIn')

SkillsAndTools.Skills_Data.forEach(item => {
    let createData = document.createElement('div')

    createData.innerHTML = `
                       <div class="skill">
                                    <div class="skill-slide-left">
                                        <div class="skills-left-content">
                                            <p class="skill-icon">${item.icon}</p>
                                            <p class="skill-title">${item.title ? item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title : item.header_title.length > 17 ? item.header_title.slice(0, 17) + '...' : item.header_title}</p>
                                            <p class="skill-description">${item.description}</p>
                                        </div>
                                    </div>
                                    <div class="skill-slide-right">
                                        <div class="state">${item.header_title ? item.header_title.length > 17 ? item.header_title.slice(0, 17) + '...' : item.header_title : ""}</div>
                                        <div class="skills-container">
                                            </div>
                                        </div>
                                    </div>
                                </div>`
            SkillsIn.appendChild(createData)

                const skills_container = createData.querySelector('.skills-container')
                const skills_left_content = createData.querySelector('.skills-left-content')
    
                item.skills.forEach(item => {
                let createParcent = document.createElement('div')
                createParcent.innerHTML = `
                                <div class="skill-parsentage-data">
                                            <p class="pro_lang">
                                                <span>${item.skill.length > 16 ? item.skill.slice(0, 15) + "..." : item.skill}</span>
                                                <span>${item.parcent}%</span>
                                            </p>
                                     <div class="parsent-data">
                                        <div style="width: ${item.parcent}%; background: ${item.parcent > 80 && item.parcent < 100 ? 'rgba(2, 222, 116, 1)' : item.parcent > 50 && item.parcent < 80 ? 'rgb(44, 213, 255)' : item.parcent > 30 && item.parcent < item.parcent < 50 ? 'rgb(150, 44, 255)' : item.parcent < 30 ? 'rgba(255, 44, 143, 1)' : ''};"class="parsent"></div>
                                </div>
                `

            skills_container.appendChild(createParcent)

    })

    
})


// show year in footer
    function fullYear() {
        let Year = new Date().getFullYear()
        return Year
    }

ShowYear.innerHTML = fullYear()

logoNameAll.forEach((c, index) => {
    if (index === 0 && MyInfo.Logo.LogoName.header) {
        c.innerHTML = MyInfo.Logo.LogoName.header.slice(0, 1).toUpperCase() +  MyInfo.Logo.LogoName.header.slice(1).toLowerCase()
    }
    else if (index === 1 && MyInfo.Logo.LogoName.sidebar) {
        c.innerHTML = MyInfo.Logo.LogoName.sidebar.slice(0, 1).toUpperCase() +  MyInfo.Logo.LogoName.sidebar.slice(1).toLowerCase()
    } else if (index === 2 && MyInfo.Logo.LogoName.footer) {
        c.innerHTML = MyInfo.Logo.LogoName.footer.slice(0, 1).toUpperCase() +  MyInfo.Logo.LogoName.footer.slice(1).toLowerCase()
    } else if (index === 3 && MyInfo.Logo.LogoName.footer) {
        c.innerHTML = MyInfo.Logo.LogoName.footer.slice(0, 1).toUpperCase() +  MyInfo.Logo.LogoName.footer.slice(1).toLowerCase()
    }
    else {
        c.innerHTML = MyInfo.Logo.LogoName.logo.slice(0, 1).toUpperCase() +  MyInfo.Logo.LogoName.logo.slice(1).toLowerCase()
    }  
})


function MyInterestShowing() {
    myintersetShow.innerHTML = MyInfo.MyInterrest.MyInterrestIn
}
MyInterestShowing()

MyInfo.MyGenarelInfo.IamInInternet.forEach((item, index) => {
    let createContact = document.createElement("div")
    createContact.classList.add("contact-child-con")
    createContact.innerHTML = `
                                    <a target="_blank"href="${item.link}" class="contact-icon-con">
                                        ${item.icon}
                                    </a>
                                    <div class="contact-body-section-con">
                                        <div class="contact-body-section-wraper">
                                        <div class="title-contact-con">${item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}</div>
                                        <div class="descreption-contact-con">${item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</div>
                                        <div class="link-body-con">
                                            <a target="_blank"href="${item.link}">${item.sortLink.length > 28 ? item.sortLink.slice(0, 27) + "..." : item.sortLink}</a>
                                        </div>
                                        </div>
                                    </div>`
    ContactContainer.appendChild(createContact)
})

const PushMyDataInHtml = () => {
    let sliceHomeDescription = `<div>${MyInfo.MyGenarelInfo.homeDescription.slice(0, 187)}... &nbsp;<button class="moreBtn">more</button></div>`
    let homeDescription = ``
    if(MyInfo.MyGenarelInfo.homeDescription.length > 187) {
        homeDescription = sliceHomeDescription
        let countData = 0
        textContentData.addEventListener("click", () => {
            countData++
            if (countData >= 2) countData = 0
            if (countData === 1) {
                homeDescription = `<div>${MyInfo.MyGenarelInfo.homeDescription} &nbsp;<button class="moreBtn hide">more</button></div>`
                textContentData.innerHTML = homeDescription
            } else {
                homeDescription = sliceHomeDescription
                textContentData.innerHTML = homeDescription
            }
            console.log(countData)
        })
    } else {
        homeDescription = MyInfo.MyGenarelInfo.homeDescription
    }
    

    textContentData.innerHTML = homeDescription
    LiveIn.forEach((item, index) => {
        item.innerHTML = MyInfo.MyGenarelInfo.liveIn
    })
    aboutMeTitle.innerHTML = MyInfo.AboutMe.aboutMeTitle
    abouteMeDescriotion.innerHTML = MyInfo.AboutMe.aboutMeDescription
    TotalProjectCount.innerHTML = "total " + projects.Recent_Projects.length + ` ${projects.Recent_Projects < 2 ? "project" : "project's"} project`
    projectCount.innerHTML = `${projects.Recent_Projects.length}`
}
PushMyDataInHtml()

let SidebarElement = SidebarNav.querySelectorAll("li a")

SidebarElement.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        SidebarElement.forEach(btnData => btnData.classList.remove("selected"))
        btn.classList.add("selected")
    })
})

function Slider() {
    const container = AboutMeImage
    let count = 0
    const imgs = MyInfo.AboutMe.aboutMeImgConfig.aboutMeImgs
    const time = MyInfo.AboutMe.aboutMeImgConfig.slideTime * 1000
    

 imgs.forEach((img, index) => {
            let createBtn = document.createElement("button")
            createBtn.innerHTML = ""
            imageSlideBtns.appendChild(createBtn)
            if (index === 0) {
                createBtn.classList.add("active")
            }

            createBtn.addEventListener("click", () => {
                imageBtns.forEach(btn => btn.classList.remove("active"))
                createBtn.classList.add("active")
                count = index

                Slideranimate()


    })
})

    const imageBtns = imageSlideBtns.querySelectorAll("button")


    imageBtns[0].classList.add("btnCompress")
    imageBtns[imgs.length - 1].classList.add("btnCompress")

    function Slideranimate() {
            const next = document.createElement("img")
            next.src = "imgs/" + imgs[count].img
            container.appendChild(next)
            next.classList.add("slideIn")
            current.classList.add("slideOut")
            imageBtns.forEach(btn => {
                btn.classList.remove("active")
            })
            imageBtns[count].classList.add("active")

            setTimeout(() => {
                current.remove()
                current = next
            }, 500)
    }

    let current = container.querySelector("img")

    setInterval(() => {
        count++
        if (count >= imgs.length) {
            count = 0
            
        }
        Slideranimate()

    }, time)


       
}

Slider()
