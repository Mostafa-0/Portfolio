/* ----- Nav Bar - Phones ----- */
const navMenu = document.getElementsByClassName('nav-menu')[0];
const navList = document.querySelector('nav ul');
const pageArea = {
    main: document.querySelector('main') ,
    footer:document.querySelector('footer')
}

navMenu.addEventListener('click', () => {
    navList.classList.toggle('nav-active')

    if (navList.classList.contains('nav-active')) {
        const links = navList.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    navList.classList.remove('nav-active')
                }, 500);
        });
        })
        for (const key in pageArea) {
            if (Object.hasOwnProperty.call(pageArea, key)) {
                const element = pageArea[key];
                element.addEventListener('click', () => {
                    navList.classList.remove('nav-active')
                    console.log('haha')
            });
            }
        }
    }
})

/* ----- Icons Style ----- */
const skillsIcons = document.querySelectorAll('.skills i');
skillsIcons.forEach(icon => {
    icon.classList.add('fa-2xl');
});

const socialIcons = document.querySelectorAll('.social i');
socialIcons.forEach(icon => {
    icon.classList.add('fa-xl');
});

/* ----- Number Copying ----- */
const phone = document.querySelector('.phone');
const copyWindow = document.querySelector('.copy-number')
let number = phone.querySelector('input');

// Hover display
number.addEventListener('mouseover', () =>{
    copyWindow.style.display = 'block';
})

phone.addEventListener('mouseleave', () =>{
    copyWindow.style.display = 'none';
})

// Copy function
phone.addEventListener('click', () =>{
    number.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    copyWindow.textContent = 'Copied';
    setTimeout(() => {
        copyWindow.style.display = 'none';
        copyWindow.textContent = 'Copy Number';
    }, 1000);
})

/* ----- Links Hover Style ----- */

const mail = document.querySelector('.mail');
mail.addEventListener('mouseover', () =>{
    let logo = document.querySelector(`.mail i`);
    logo.style.color = '#E7B10A';
})

mail.addEventListener('mouseleave', () =>{
    let logo = document.querySelector(`.mail i`);
    logo.style.color = 'inherit';
})

number.addEventListener('mouseover', () =>{
    let logo = document.querySelector(`.phone i`);
    logo.style.color = '#E7B10A';
})

number.addEventListener('mouseleave', () =>{
    let logo = document.querySelector(`.phone i`);
    logo.style.color = 'inherit';
})

