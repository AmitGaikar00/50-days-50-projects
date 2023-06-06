const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector(".container")
const navbar = document.querySelector(".navbar")


open.onclick = () =>{
    container.classList.add("show")
    // navbar.style.opacity=1;
}
close.onclick = () =>{
    container.classList.remove("show")
    // navbar.style.opacity=0;
}
