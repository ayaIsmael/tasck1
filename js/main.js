
let header=document.getElementById('header');
let sections=document.querySelectorAll('section');
let links=document.querySelectorAll('.nav-item .nav-link');

window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        header.classList.add('shrink');
    }else{
        header.classList.remove('shrink');
    }

    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 100 && window.scrollY < (section.offsetTop + section.scrollHeight - 100)){
            links.forEach(link => {link.classList.remove('active')});
            let link = document.getElementById(section.dataset.link);
            link.classList.add('active');
        }
    });

    
});

$(document).ready(function(){
    $(".owl-carousel.one").owlCarousel({
        responsive: {
            0:{
                items:1
            },
            567:{
                items:2
            },
            992:{
                items:4
            }
        },
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
});

$(document).ready(function(){
    $(".owl-carousel.two").owlCarousel({
        responsive: {
            0:{
                items:1
            },
            767:{
                items:2
            },
            992:{
                items:3
            }
        },
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });
});