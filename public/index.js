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
    navbarMenu.classList.remove('open')
    scrollIntoViews(link);
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

    //Move selection to clicked button

    const active= document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target=e.target.nodeName=='BUTTON' ? e.target : e.target.parentNode;
    //BUTTON 조건에 맞으면(? 이하) 실행문 : 아니면 실행문;
    //target에서 span이 클릭되어서 추가하는데 문제가 생겨 -> 이를 해결
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() =>{
        projects.forEach((project) => {
        if(filter ==='*' || filter===project.dataset.type) {
            project.classList.remove('invisible');
        } else{
            project.classList.add('invisible');
        }
    });

        projectContainer.classList.remove('anim-out')
    }, 300);
    
});    

//anim-out이 추가되고 없애주지 않으면 계속 css에서의 opacity가
//지정된 값으로 남아있음

//코드의 순서가 setTimeout이 먼저 온 이유
//먼저 filter를 하고 3초를 주는 것이 3초를 먼저 주고 필터링을
//하는 것보다 애니메이션이 자연스러움



//navbar toggoel button for meadia query

const navbarToggleBtn=document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () =>{
    navbarMenu.classList.toggle('open');
})