const menuOpenElement = document.querySelector('.hamburger');
const menuCloseElement = document.querySelector('.menu__close');
const overlayElement = document.querySelector('.menu__overlay');
const menuElement = document.querySelector('.menu');
const rectangle = document.querySelectorAll('.rectangle');

menuOpenElement.addEventListener('click',()=>{
    menuElement.classList.add('menu_active');
    overlayElement.classList.add('menu_active');
})

menuCloseElement.addEventListener('click',()=>{
    menuElement.classList.remove('menu_active');
    overlayElement.classList.remove('menu_active');
})

for (let i = 0; i < rectangle.length; i++) {
    const prochent = rectangle[i].querySelector("span").innerText;
    rectangle[i].querySelector(".rectangle__scale").style.width = prochent;    
}