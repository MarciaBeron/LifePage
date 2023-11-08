
window.alert("This page is a constant project and it is always under construction!\nBe nice!\n\nEsta pagina es un proyecto constante que se encuentra bajo construcción todo el tiempo\n¡Sé amable!")

let toggle = document.getElementById("switch");
toggle.addEventListener('click', () =>{
    document.body.classList.toggle('light')
})

let send = document.getElementById("send");
send.addEventListener('click', () =>{
    window.alert("Sorry! It doesn't work- yet!\nWe are working on it!\n\n¡Ups! Aún no funciona como debería :(\n¡Estamos trabajando en ello!")
})