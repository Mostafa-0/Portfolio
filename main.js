// Navigation Bar Toggling
const navMenu = document.querySelector('nav'),
openIcon = document.querySelector('#open-icon'),
closeIcon = document.querySelector('#close-icon');
const pageArea = document.querySelector(':not(nav)')

openIcon.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
    openIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');

    if (navMenu.classList.contains('visible')) {
        const links = navMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    navMenu.classList.remove('visible')
                }, 100);
        });
        })
    //     pageArea.addEventListener('click', () => {
    //         navMenu.classList.remove('visible')
    // });
    }
})

closeIcon.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
    closeIcon.classList.toggle('active');
    openIcon.classList.toggle('active');
})

// Icons sizes
const headerIcons = document.querySelectorAll('header i');
headerIcons.forEach(icon => {
    icon.classList.add('fa-xs')
});

const footerIcons = document.querySelectorAll('main i, footer i');
footerIcons.forEach(icon => {
    icon.classList.add('fa-2xl')
});

// Projects Carousel
const arrowLeft = document.getElementById('left');
const arrowRight = document.getElementById('right');

arrowRight.addEventListener('click', () => {
    const currentItem = document.querySelector('.current');
    const nextItem = document.querySelector('.next');
    const previousItem = document.querySelector('.previous');
    const behindItem = document.querySelector('.behind');

    nextItem.classList.remove('next');
    nextItem.classList.add('current');

    currentItem.classList.remove('current');
    currentItem.classList.add('previous');

    previousItem.classList.remove('previous');
    previousItem.classList.add('behind');

    behindItem.classList.remove('behind');
    behindItem.classList.add('next');
})

arrowLeft.addEventListener('click', () => {
    const currentItem = document.querySelector('.current');
    const nextItem = document.querySelector('.next');
    const previousItem = document.querySelector('.previous');
    const behindItem = document.querySelector('.behind')
    
    previousItem.classList.remove('previous');
    previousItem.classList.add('current');

    currentItem.classList.remove('current');
    currentItem.classList.add('next');

    nextItem.classList.remove('next');
    nextItem.classList.add('behind');

    behindItem.classList.remove('behind');
    behindItem.classList.add('previous');
})

