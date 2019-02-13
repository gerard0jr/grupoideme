// Typing animation
var typed = new Typed('#typed', {
    strings: ["Ideas que cuidan sus productos... ^600 Productos que cuidan sus ideas."],
    typeSpeed: 30,
    showCursor: false
  });

// Transparent NavBar
const navTag = document.getElementById('nav-tag')
const logo = document.getElementById('logo')
const navLink = document.getElementsByClassName('nav-link')
const navLinkSize = navLink.length
const navItem = document.getElementsByClassName('active')[0]

window.onscroll = e => {
    if(window.scrollY >= 25){
        navTag.style.backgroundColor = 'white'
        logo.setAttribute('src', 'img/logo.png')
        navItem.classList.add('active-scrolled')
        for(let i = 0; i < navLinkSize; i++){
            navLink[i].style.color = 'rgb(94, 94, 94)'
        }
    } else {
        navTag.style.backgroundColor = 'transparent'
        logo.setAttribute('src', 'img/white-logo.png')
        navItem.classList.remove('active-scrolled')
        for(let i = 0; i < navLinkSize; i++){
            navLink[i].style.color = ''
        }
    }
}