/* ----- Nav Bar - Phones ----- */
const navMenu = document.getElementsByClassName('nav-menu')[0];
console.log(navMenu)
navMenu.addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('nav-active')
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

