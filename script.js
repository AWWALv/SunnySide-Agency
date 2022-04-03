const hamburgerBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const closeBtn = document.querySelector(".close-btn")

hamburgerBtn.addEventListener('click', function(){
    navList.classList.add('active')
});
closeBtn.addEventListener('click', function(){
    navList.classList.remove('active')
});
