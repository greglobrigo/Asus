//smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 200
});
//**



//mobile navbar slide in-out, click on main to release.
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        nav.classList.add('nav-inactive')

        setTimeout(()=>{
            if(!nav.classList.contains('nav-active')){
             nav.classList.remove('nav-inactive')
            }
        }, 750)


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.2}s`
            }
        })

    });


    document.querySelector('main').addEventListener('click', () => {
    

        setTimeout(()=>{
            if(!nav.classList.contains('nav-active')){
                nav.classList.remove('nav-inactive')
            }
        }, 750)

        if (nav.classList.contains('nav-active')) {
            nav.classList.toggle('nav-active')
    
        };
    
        navLinks.forEach((link, index) => {
            if (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.2}s`) {
                link.style.animation = ''
            }
        })
        
    })


}


navSlide();
//**

