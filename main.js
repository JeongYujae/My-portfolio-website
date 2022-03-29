'use strict';

//navbar color change

const navbar=document.querySelector('#navbar');
//원하는 변수가 차지하는 높이 구하기 함수
const navbarHeight= navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    if (window.scrollY>navbarHeight) {
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }
})

//Srolling when clikcing the navbar menu

//인자. target -> html 태그
//target.dataset.link -> html 태그 안에 data-link의 값 할당


const navbarMenu=document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) =>{
    const target=event.target;
    const link=target.dataset.link;
    if (link==null){
        return;
    }
    const scrollTo=document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
})

const contact=document.querySelector('.home__contact');
contact.addEventListener('click', (event) =>{
    // const scrollTo_c=document.querySelector('#contact');
    // scrollTo_c.scrollIntoView({behavior: 'smooth'})
    scrollIntoViews('#contact')
    //same code
});

//Making function for the 2 duplicated events(clicking and scrolling)

function scrollIntoViews(selector) {
    const scroll_to_selector= document.querySelector(selector);
    scroll_to_selector.scrollIntoView({behavior:'smooth'})

}


//Fading home when scrolling down

const home= document.querySelector('.home__container');
const homeHeight= home.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    home.style.opacity= 1-window.scrollY/homeHeight;
});


//Show Arrow up button when scrolling down
const arrowup=document.querySelector('.arrow-up')
//html에 class 추가하는 방법
document.addEventListener('scroll', () =>{
    if(window.scrollY>homeHeight /2){
        arrowup.classList.add('visible');
    } else {
        arrowup.classList.remove('visible');

    }

});

//Arrowup click and move
arrowup.addEventListener('click', () =>{
    scrollIntoViews('#home');
})

//Projects sort

const workBtnContainer=document.querySelector('.work_categories')
const projectContainer=document.querySelector('.work__projects')
const projects= document.querySelectorAll('.project')
workBtnContainer.addEventListener('click', (e) =>{
    const filter= e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter==null){
        return;
    }

    projects.forEach((project) => {
        if(filter ==='*' || filter===project.dataset.type) {
            project.classList.remove('invisible');
        } else{
            project.classList.add('invisible');
        }
    });
});
