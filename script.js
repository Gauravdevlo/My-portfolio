let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset= sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header na a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        btnText.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More";
    }
}