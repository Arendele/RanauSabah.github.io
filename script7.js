let navbars = document.querySelector('.header .navbars');

document.querySelector('#menu-btn').onclick = () =>{
    navbars.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbars.classList.remove('active');
}

window.onscroll = () =>{
    navbars.classList.remove('active'); 
}