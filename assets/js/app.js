import { appNavigation, What_im, projects, SkillsAndTools, MyInfo} from './data.js'



const loadingContainer = document.getElementById("loadingContainer")
const header = document.querySelector(".header")
const aside = document.querySelector(".sidebar")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")


document.addEventListener("DOMContentLoaded", () => {
    // loader part
const bodyLoader = document.getElementById("bodyLoader")
bodyLoader.classList.remove("hideLoader")

window.addEventListener("load", () => {
    let timeSet = setTimeout(() => {
        bodyLoader.classList.add("hideLoader")
        header.classList.add("showEl")
        aside.classList.add("showEl")
        main.classList.add('showEl')
        footer.classList.add("showEl")


        clearTimeout(timeSet)
    }, 200)
})
})



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
const ProjectCountIn = document.getElementById("ProjectCountIn")

// website pages
const RecentRopos = document.getElementById("RecentRopos")
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
const EducationIn = document.getElementById("EducationIn")
const EduDataIn = document.getElementById("EduDataIn")


// filter 
const filterBtn = document.getElementById("filterBtn")
const FilterMenu = document.getElementById("FilterMenu")
const projectHeaderTextBtns = document.querySelector(".project-header-text-btns")
const HideSearchContainer = document.getElementById("HideSearchContainer")
const SearchInputData = document.getElementById("SearchInputData")
const SearchPlaceholder = document.getElementById("SearchPlaceholder")
const RepoShort = document.querySelector(".RepoShort")
const RepoShortBtns = RepoShort.querySelectorAll("button")
const Search_Suggest = document.getElementById("Search_Suggest")
const SearchSuggestContainer = document.querySelector(".SearchSuggestContainer")



// btns-p
const btnsP = document.querySelector(".btns-p")
const btnsPallbtn = btnsP.querySelectorAll("button")


// slider imgs 
const AboutMeImage = document.getElementById("AboutMeImage")
const imageSlideBtns = document.querySelector(".imageSlideBtns")


// ErrorViewer

const ErrorViewer = document.getElementById("ErrorViewer")
const ErrorHandlerCard = document.getElementById("ErrorHandlerCard")
const TryAgainBtn = document.getElementById("TryAgainBtn")




const months = [
  { short: "Jan", full: "January" },
  { short: "Feb", full: "February" },
  { short: "Mar", full: "March" },
  { short: "Apr", full: "April" },
  { short: "May", full: "May" },
  { short: "Jun", full: "June" },
  { short: "Jul", full: "July" },
  { short: "Aug", full: "August" },
  { short: "Sep", full: "September" },
  { short: "Oct", full: "October" },
  { short: "Nov", full: "November" },
  { short: "Dec", full: "December" }
];



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


 let countD = 0;
 let countJ1 = 0;
function AddProjects() {
    if (projects.Recent_Projects.length < 1) return
    projects.Recent_Projects.forEach(project => {
        let filtaredImagesTitle = project.images.filter(item => item.title[0] !== "")
        let CreateData = document.createElement('div')
    CreateData.innerHTML = `
                              <div class="project">
                                        <div class="project-wraper">
                                            <div class="project-header">
                                                <div class="header-image-wraper">
                                                    ${project.images.length < 1 ? "" : `<div class="slideImageContainer">
                                                        <div class="slideImages">
                                                            <img src="imgs/project_image/${project.images[0].img}">
                                                            ${project.images.length > 1 ? `<div class="imgcoverHeader ${project.status ? 'left' : ""}">
                                                                <div class="image_quantity_show">0/0</div>
                                                            </div>`: ''}
                                                            ${project.images.length > 0 && filtaredImagesTitle.length > 0 ? `<div class="imgcoverMain">
                                                                <button class="closeimgTitle"><i class="fa-solid fa-xmark"></i></button>
                                                                <div class="project_image_title">
                                                                    ${project.images[0].title[0]}
                                                                </div>
                                                            </div>` : ""}
                                                        </div>
                                                        ${project.images.length > 1 ? `<div class="projectsImageSlideBtns">
                                                        </div>` : ""}
                                                    </div>`}
                                                    <div class="${project.status ? 'Stutus_Show': 'hide_status'}">
                                                        <p class="${project.status === 'new' ? 'new' :
                                                             project.status === 'old' ? 'old' :
                                                              project.status === 'featured' ? 'featured' : project.status === "later" ? 'later' : 
                                                              project.status === "upcoming" ? "upcoming" : 'hide' }">
                                                               ${project.status === 
                                                                "old" ? `<i class="fa-solid fa-person-cane"></i>` : project.status === "new" ? `<i class="fa-regular fa-folder-open"></i>` : project.status === "featured" ? `<i class="fa-solid fa-feather"></i>` : project.status === "later" ? `<i class="fa-solid fa-layer-group"></i>` : project.status === "upcoming" ? `<i class="fa-regular fa-clock"></i>` : ""
                                                               }
                                                               ${project.status.slice(0, 1).toUpperCase() + project.status.slice(1).toLowerCase()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="project-body-this">
                                                <div class="project-title">${project.title_icon}&nbsp;${project.title.length > 40 ? project.title.slice(0, 40) + "... " + "more" : project.title}</div>
                                                <div class="project-description">${project.description.length > 155 ? project.description.slice(0, 155) + ".. " + `<span class="moreBtn">more</span>` : project.description}</div>
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
        if (project.description.length > 155){
            let ProjectMoreBtn = CreateData.querySelector(".project-description")
            ProjectMoreBtn.addEventListener("click", () => {
                countJ1++;
                if (countJ1 >= 2) countJ1 = 0;
                if (countJ1) {
                    ProjectMoreBtn.innerHTML = project.description
                } else {
                    ProjectMoreBtn.innerHTML = `${project.description.slice(0, 155)}... <span class="moreBtn">more</span>`
                }
            })
        }
        




    
        let components = project.Used_in_project
        components = project.Used_in_project.filter(c => c.component !== "") 
        let data = CreateData.querySelector('.Used_in_project')
        components.forEach(project_in_used_lang => {
            let createData = document.createElement('button')
            createData.innerHTML = project_in_used_lang.component

            data.appendChild(createData)
        })

        const slideImagesImg = CreateData.querySelector(".slideImages img")
        const projectsImageSlideBtns = CreateData.querySelector(".projectsImageSlideBtns")
        let imgs = project.images
        const image_quantity_show = CreateData.querySelector(".image_quantity_show")
            
        function ClickEvery(d) {
                UpdateImgLength(d, imgs.length)
                slideImagesImg.classList.add("animate")
                setTimeout(() => {
                    slideImagesImg.classList.remove("animate")
                }, 300)
                slideImagesImg.src = "imgs/project_image/" + project.images[d].img
                projectsImageSlideBtns.querySelectorAll("button").forEach(btn => btn.classList.remove("active"))
                projectsImageSlideBtns.querySelectorAll("button")[d].classList.add("active")
            
            }
           

        if (imgs.length > 1) {
            imgs.forEach((imgJ, index) => {
            let createBtn = document.createElement("button")
            projectsImageSlideBtns.appendChild(createBtn)
                if (index === 0) {
                    createBtn.classList.add("active")
                }
                

            createBtn.addEventListener("click", () => {
                ClickEvery(index)
                countD = index
                
            })

            

        })

        slideImagesImg.addEventListener("click", () => {
                countD++;
                if (countD >= imgs.length) countD = 0;
                ClickEvery(countD)
                
            })
            
            UpdateImgLength(countD, imgs.length)

        }
          
        function UpdateImgLength(currentN, maxLength) {
            image_quantity_show.innerHTML = `${currentN + 1}/${maxLength}`
        }
        if (imgs.length > 3) {
            projectsImageSlideBtns.querySelectorAll("button")[0].classList.add("btnCompress")
            projectsImageSlideBtns.querySelectorAll("button")[imgs.length - 1].classList.add("btnCompress")
        }


            
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
let skillCon = SkillsAndTools.Skills_Data.map(item => item.skills).flat().map(item => item.skill)
let skillNameCount = {}
let skillNameData = []
for(let i = 0; i < skillCon.length; i++) {
    skillNameCount[skillCon[i]] = ++skillNameCount[skillCon[i]] || 1
}
for (let i = 0; i < Object.keys(skillNameCount).length; i++) {
    if (skillNameCount[Object.keys(skillNameCount)[i]] > 1) {
        skillNameData.push(Object.keys(skillNameCount)[i])
    }
}

for (let i = 0; i < skillNameData.length; i++) {
let dublicateData = SkillsAndTools.Skills_Data.map(item => item.skills).flat().filter(item => item.skill === skillNameData[i])
    SkillsAndTools.Skills_Data = SkillsAndTools.Skills_Data.map(section => {
        return {
            ...section,
            skills: section.skills.map(item => {
                if (item.skill === skillNameData[i]) {
                    return { ...item, parcent:  dublicateData[0].parcent}
                }
                return item
            })
        }
    })

}

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
    ProjectCountIn.innerHTML = projects.Recent_Projects.length 
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


   if (imgs.length > 3) {
     imageBtns[0].classList.add("btnCompress")
     imageBtns[imgs.length - 1].classList.add("btnCompress")
   }

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

function MyEducation() {
    // EducationIn
     MyInfo.Education.eduNames.sort((a, b) => 
        b.id - a.id
     )
    MyInfo.Education.eduNames.forEach((item, index) => {
        let createEduContainer = document.createElement("div")
        createEduContainer.classList.add("eduStep")
        createEduContainer.innerHTML = `
                                                <div class="eduStepHeader">
                                                    <div class="eduStepLeftSide">
                                                        <span>${item.eduFullName}</span>
                                                        <span class="indicator-white"></span>
                                                        <span class=""ShortEduName>${item.eduS}</span>
                                                    </div>
                                                </div>
                                                <div class="eduStepMain">
                                                    <div class="eduStepMainPart1">
                                                        <div class="organizationName eduOrgan-${item.eduS === "SSC" ? "blue" : ""}">
                                                            <span class="icon"><i class="fa-solid fa-school-circle-check"></i></span>
                                                            <span>${item.organizationName}</span>
                                                        </div>
                                                        <div class="eduMain">
                                                            <p class="edu-year-show">${item.year}</p>
                                                            <div class="vr-border-p1"></div>
                                                            <p class="gpaSec">
                                                                <span>GPA</span>
                                                                <span class="indicator-white"></span>
                                                                <span class="gpaValue">${item.GPA}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="hr-border-p1"></div>
                                                    <div class="eduStepMainPart2">
                                                        <div class="eduP2Content">
                                                            <div class="showStatus">
                                                                ${item.status === "running_study" ? `<i class="fa-solid fa-chart-simple"></i><span class="indicator-green-g1"></span>` : `<span class="indicator-white"></span>`}
                                                                <span></span>
                                                                <span class="statusValue">${item.status.split("_").join(" ")}</span>
                                                            </div>
                                                            <div class="catagory">
                                                                <div class="catagorytext">
                                                                    <span>with</span>
                                                                    <span class="catagoryType">Science</span>
                                                                </div>
                                                                ${item.Catagory === "Science" ? `<span class="icon"><i class="fa-solid fa-flask-vial"></i></span>` : ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`

        EduDataIn.appendChild(createEduContainer)
    })
}
 MyEducation()






let pageActive = localStorage.getItem("pageActive") || "projectPage"

RoutesPage(pageActive)

 btnsPallbtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btnsPallbtn.forEach(offBtn => offBtn.classList.remove("active"))
        btn.classList.add("active")
        RoutesPage(btn.dataset.text)
        
    })
 })

 function RoutesPage(pageName)
 {
    btnsPallbtn.forEach(item => item.classList.remove("active"))
    localStorage.setItem("pageActive", pageName);
    switch(pageName) 
    {
        case "ReposPage":
            btnsPallbtn[1].classList.add("active")
            RecentProjects.classList.add("height0")
            RecentRopos.classList.remove("height0")
            FetchGithubRepos()
            break
        case "projectPage":
            btnsPallbtn[0].classList.add("active")
            RecentProjects.classList.remove("height0")
            RecentRopos.classList.add("height0")
            ShowErrorData("", "", "", "")
            break
        default:
            btnsPallbtn[0].classList.add("active")
            RecentProjects.classList.remove("height0")
            RecentRopos.classList.add("height0")
    }
 }
 

 function ShowErrorData(ErrorSymbol, ErrorTitle, errorDescription, classType) {

    if (classType === "add") {
        ErrorHandlerCard.classList.remove("height0")
    } else {
        ErrorHandlerCard.classList.add("height0")
    }
    
    ErrorViewer.innerHTML = `<span class="ErrorIcon">
                               ${ErrorSymbol || `<i class="fa-solid fa-circle-exclamation"></i>`}
                             </span>
                                <div class="errorhandlerTitle">
                                   ${ErrorTitle || "Something Went Wrong !"}
                                </div>
                                <div class="errorTextdescription">
                                    ${errorDescription}
                                </div>`
 }
 ShowErrorData("", "Something Went Wrong !", "Maybe your internet problem check your internet conection !", "")

async function FetchGithubRepos() {
    loadingContainer.classList.remove("height0")
    try {
        let res = await fetch("/api/repos")
        let repos = await res.json()
        await ShowGithubData(repos)

    } catch (err) {

        if (pageActive === "projectPage") return


        if (!navigator.onLine) {
         ShowErrorData("", "No Internet Conection !", "Check your internet conection ! connect your wifi or mobile data", "add")   
        } else {
            ShowErrorData(
            "",
            "Something Went Wrong !",
            "Maybe there is a problem with the API or an internet problem.",
            "add"
        )
        } 
    } finally {
        loadingContainer.classList.add("height0")
    }
}

TryAgainBtn.addEventListener("click", () => {
    FetchGithubRepos()
    ShowErrorData("", "", "", "")
})

function TimedataShow(date) {
    date = new Date(date)
    let timedataS = `${months[date.getMonth()].short} ${String(date.getDate()).padStart(2, "0")} ${date.getFullYear()}`
    return timedataS
}



async function ShowGithubData(data) {
    let visibleRepos = data.filter(item => !MyInfo.Hide_repos.includes(item.name))

      const promiseArr = visibleRepos.map(item => HandleCommits(item.name))
      const Commit = (await Promise.all(promiseArr)).flat()

     let isErrorInImg = false
        visibleRepos.forEach((item, index) => {

        let webLink = `https://tuhincds.github.io/${item.name}/`
        let imgUrl = `https://raw.githubusercontent.com/${item.owner.login}/${item.name}/main/preview.png`
        let createDiv = document.createElement("div")
        createDiv.className = "repoCardMain"
        createDiv.innerHTML = 
        `                      <div class="repoCard">
                                <div class="repoImgContainer">
                                                <div class="repoimage">
                                                    <img src="${imgUrl}" alt="" class="repoImg">
                                                    <div class="imgOverlap"></div>
                                                </div>
                                                <div class="repoHead">
                                                    <div class="repoCardHeadleft">
                                                        <span>${item.visibility} ৽ r</span>

                                                    </div>
                                                    <div class="repoCardHeadRight">
                                                        <a href="${webLink}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                                        <a href="${item.clone_url}" target="_blank"><i class="fa-solid fa-code"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="repoMainSection">
                                                <div class="repoName">
                                                    <span class="repoNameFi">Repo</span>
                                                    <span class="repoNameText">${item.name}</span>
                                                </div>
                                                <div class="repoDescription">
                                                    <div class="repoDescriptionSection">
                                                        <div class="repoDescriptionSectionTexts">
                                                            <div class="descriptionText">
                                                                <span class="">description</span>
                                                                <span>${item.description || item.owner.login + " is not write description - Empty"}</span>
                                                            </div>
                                                        </div>
                                                        <div class="topicsContent">
                                                            <p>Topics<i class="fa-solid fa-arrows-turn-right"></i></p>
                                                            <div class="topics-g">
                                                            </div>
                                                        </div>
                                                        <div class="showCommits">
                                                            <div class="commitSection">
                                                                <div class="Branch_show_con">
                                                                    <i class="fa-solid fa-code-branch"></i>
                                                                    <span>${item.default_branch}</span>
                                                                </div>
                                                            <div class="inOther">
                                                                <div class="commit ${Commit[index].commit.message.length > 16 ? "col" : ""}">
                                                                    <p class="commit-TextHead"><i class="fa-solid fa-code-commit"></i>Last commit</p>
                                                                    <div class="commitMessage ${Commit[index].commit.message.length > 16 ? "col" : ""}">
                                                                        <p class="${Commit[index].commit.message.length > 16 ? "col" : ""}">"${Commit[index].commit.message.length > 30 ? Commit[index].commit.message.slice(0, 30) + "..." : Commit[index].commit.message}"</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <button class="commit-Author-Head">commit Author <i class="fa-solid fa-caret-down"></i></button>
                                                             <div class="AuthorCommit">
                                                                <div class="author">
                                                                    <p><i class="fa-solid fa-user-pen"></i>Author</p>
                                                                    <span class="authorName">${Commit[index].commit.author.name}</span>
                                                                    <span class="authorContentTimeLine">at <span class="timeShow">${FormatTime(Commit[index].commit.author.date)}</span></span>
                                                                </div>
                                                                <div class="authorEmail">
                                                                    <p><i class="fa-solid fa-at"></i>Email</p>
                                                                    <span class="authoremailShow">${Commit[index].commit.author.email}</span>
                                                                </div>
                                                                <div class="isAdmin">
                                                                    <p><i class="fa-solid fa-user-tie"></i>Admin</p>
                                                                    <span class="isAdminDataShow">${item.permissions.admin ? "yes" : "no"}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="languageshowContent">
                                                            <p><i class="fa-solid fa-language"></i> Language</p>
                                                            <div class="languages">
                                                                <span class="${item.language}">${item.language}</span>
                                                            </div>
                                                        </div>
                                                
                                                        <div class="hr-border-p1"></div>
                                                        <div class="repoCardDescriptionFooter">
                                                            <div class="created_at"><span>created<i class="fa-regular fa-clock"></i></span> <span>${TimedataShow(item.created_at)}</span></div>
                                                            <div class="vr-border-p1 ${TimedataShow(item.created_at) === TimedataShow(item.updated_at) ? "hide" : ""}"></div>
                                                            <div class="updated_at ${TimedataShow(item.created_at) === TimedataShow(item.updated_at) ? "hide" : ""}"><span>updated<i class="fa-regular fa-pen-to-square"></i></span> <span>${TimedataShow(item.updated_at)}</span></div>
                                                            <div class="vr-border-p1 ${TimedataShow(item.created_at) === TimedataShow(item.pushed_at) ? "hide" : ""}"></div>
                                                            <div class="pushed_at ${TimedataShow(item.created_at) === TimedataShow(item.pushed_at) ? "hide" : ""}"><span>pushed<i class="fa-regular fa-circle-down"></i></span> <span>${TimedataShow(item.pushed_at)} (${FormatTime(item.pushed_at)})</span></div>
                                                            ${TimedataShow(item.created_at) === TimedataShow(item.updated_at) && TimedataShow(item.created_at) === TimedataShow(item.updated_at) ? `<div class="vr-border-p1"></div>
                                                            <div class="default_branch_content"><span>branch<i class="fa-solid fa-code-branch"></i></span> <span class="default_branch">${item.default_branch}</span></div>` : ""}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="repoCardFooter">
                                                <div class="repoCardFooterRow1">
                                                    <div class="githubAvater">
                                                    <div class="profile">
                                                        <a href="${'https://github.com/' + item.owner.login}" target="_blank" class="${FormatTimeSeconds(item.pushed_at) < (84600 * 1) ?  "indicator-g-profile" : ""}">
                                                            <img src="${item.owner.avatar_url}" alt="">
                                                        </a>
                                                    </div>
                                                    <a href="${'https://github.com/' + item.owner.login}" target="_blank" class="username">${item.owner.login}</a>
                                                </div>
                                                <div class="profile-info">
                                                    <div class="watchers_count"><i class="fa-regular fa-eye"></i> ${item.watchers_count}</div>
                                                    <button class="moreOptionsBtn"><i class="fa-solid fa-ellipsis"></i></button>
                                                        <div class="MoreInfoMenu hideThisOne">
                                                            <a href="${`https://github.com/${item.owner.login}/${item.name}/archive/refs/heads/${item.default_branch}.zip`}"><i class="fa-regular fa-file-zipper"></i>Download Zip</a>
                                                        </div>
                                                </div>
                                                </div>
                                                
                                            </div>
                                        </div>`

        RecentRopos.appendChild(createDiv)

                                                            
        const repoImg = createDiv.querySelector(".repoImg")
        const repoimage = createDiv.querySelector(".repoimage")
        const imgOverlap = createDiv.querySelector(".imgOverlap")

        repoImg.onerror = () => {
            isErrorInImg = true
            repoImg.classList.add("hide")
            repoimage.classList.add("heightFix")
            imgOverlap.classList.add("hide")
        }
        const topicsG = createDiv.querySelector(".topics-g")
        if (item.topics.length > 0) {
            item.topics.forEach((topic, index) => {
                let createTopic = document.createElement("span")
                let createDot = document.createElement("span")
                let createSpan = document.createElement("span")
                createTopic.innerHTML = `${topic}`


                 if (index === 0) {
                    createSpan.innerHTML = "["
                    topicsG.appendChild(createSpan)
                }
                topicsG.appendChild(createTopic)
                if ((item.topics.length - 1) === index) {
                    createDot.className = "hideSpan"
                } else {
                    createDot.className = "topicDot"
                }
                topicsG.appendChild(createDot) 
               
                if ((item.topics.length - 1 ) === index) {
                    createSpan.innerHTML = "]"
                    topicsG.appendChild(createSpan)
                }
            })
            
        } else {
            topicsG.innerHTML = '<span>[]</span>'
        }



        const commitAuthorHead = createDiv.querySelector(".commit-Author-Head")
        const AuthorCommit = createDiv.querySelector(".AuthorCommit")

        commitAuthorHead.addEventListener("click", () => {
            AuthorCommit.classList.toggle("height0")
            if (AuthorCommit.classList.contains("height0")) {
                commitAuthorHead.querySelector("i").classList.add("rotTop")
            } else {
                commitAuthorHead.querySelector("i").classList.remove("rotTop")
            }
        })
    })
}



function FormatTime(time) {
    let now = Date.now()
    let old = new Date(time).getTime()
    let milisecond = Math.floor(now - old)
    let second = milisecond / 1000

    if (second < 7) return 'just now'
    if (second < 60) return `${Math.floor(second)}s ago`
    if (second < 3600) return `${Math.floor(second / 60)}m ago`
    if (second < 86400) return `${Math.floor(second / 3600)}h ago`
    if (second < 604800) return `${Math.floor(second / 86400)}d ago`
    if (second < 2419200) return `${Math.floor(second / 604800)}w ago`
    if (second < 31536000) return `${Math.floor(second / 2419200)}mo ago`

    return `${Math.floor(second / 31536000)}y ago`
}
function FormatTimeSeconds(time) {
    let now = Date.now()
    let old = new Date(time).getTime()
    let milisecond = Math.floor(now - old)
    let second = milisecond / 1000

    return second
}

let ActiveMenu = null

document.addEventListener("click", (e) => {
    let btn = e.target.closest(".moreOptionsBtn")
    if (btn) {
        const menu = btn.nextElementSibling
        RepomenuToggler(menu)
        return
    }

    if (e.target.closest(".MoreInfoMenu")) return
    if (ActiveMenu) {
        ActiveMenu.classList.remove("show")
        ActiveMenu = null
    }
})

function RepomenuToggler(menu) {
    if (ActiveMenu && ActiveMenu !== menu) {
        ActiveMenu.classList.remove("show")
        ActiveMenu = null
    }
    menu.classList.toggle("show")

    if (menu.classList.contains("show")){
        ActiveMenu = menu
    }
    else {
        ActiveMenu = null
    }
}


function FilterMenuToggle(status) {
    if(status === "add") {
        FilterMenu.classList.remove("height0")
        projectHeaderTextBtns.classList.add("height0") 
        return  
    } else if (status === "remove"){
        FilterMenu.classList.add("height0")
        projectHeaderTextBtns.classList.remove("height0")  
        return
    }
    FilterMenu.classList.toggle("height0")
    projectHeaderTextBtns.classList.toggle("height0")
}
filterBtn.addEventListener('click', () => {
    FilterMenuToggle("add")
})
HideSearchContainer.addEventListener("click", () => {
    FilterMenuToggle("remove")
})


function SearchInputDataFunc() {
     let SearchInputDataVal = SearchInputData.value
    Search_Suggest.innerHTML = SearchInputDataVal


   if (SearchInputDataVal.length > 0) {
        SearchPlaceholder.style.opacity = "0"
        SearchSuggestContainer.classList.remove("height0")
   } else {
        SearchPlaceholder.style.opacity = "1"
        SearchSuggestContainer.classList.add("height0")
   }
}

SearchInputData.addEventListener("input", () => {
  SearchInputDataFunc()
})

RepoShortBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        SearchInputData.value = btn.querySelector(".text").dataset.text
        SearchInputDataFunc()
    })
})

SearchRepos()

function SearchRepos() {

}
window.addEventListener("load", () => {
    SearchInputData.value = ""
})


async function HandleCommits(repo) {
    try {
        let req = await fetch(`/api/commits?repo=${repo}`)
        let data = await req.json()
        return data
    } catch (err) {
        console.log(err)
    }
} 
