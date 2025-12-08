import { appNavigation, What_im, projects} from './data.js'
import { SkillsAndTools } from './data.js'

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
                                                              project.status === 'featured' ? 'featured' :
                                                               '' }">${project.status.slice(0, 1).toUpperCase() + project.status.slice(1, 100000).toLowerCase()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="project-body-this">
                                                <div class="project-title">${project.title_icon}&nbsp;${project.title}</div>
                                                <div class="project-description">${project.description}</div>
                                                <div class="Used_in_project">
                                                <!-- Programing Languages -->
                                                </div>
                                                <div class="code-view">
                                                    <a href="#"><i class="fa-brands fa-github"></i>&nbsp;Code</a>
                                                    <a href="#">Preview</a>
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
                                            <p class="skill-title">${item.title}</p>
                                            <p class="skill-description">${item.description}</p>
                                        </div>
                                    </div>
                                    <div class="skill-slide-right">
                                        <div class="state">${item.header_title}</div>
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
                                                <span>${item.skill}</span>
                                                <span>${item.parcent}%</span>
                                            </p>
                                     <div class="parsent-data">
                                        <div style="width: ${item.parcent}%; background: ${item.parcent > 80 && item.parcent < 100 ? 'rgba(2, 222, 116, 1)' : item.parcent > 50 && item.parcent < 80 ? 'rgb(44, 213, 255)' : item.parcent > 30 && item.parcent < item.parcent < 50 ? 'rgb(150, 44, 255)' : item.parcent < 30 ? 'rgba(255, 44, 143, 1)' : ''};"class="parsent"></div>
                                </div>
                `

            skills_container.appendChild(createParcent)
        
        

    })

    
})

