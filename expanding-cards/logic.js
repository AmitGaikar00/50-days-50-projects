const imgs = document.querySelectorAll('.panel')

imgs.forEach(img =>{
    img.onclick = () =>{
        removeAll()
        img.classList.add("active")
    }
})


let removeAll = () =>{
    imgs.forEach(panel =>{
        panel.classList.remove('active')
    })
}