//Mettre le code JavaScript lié à la page photographer.html

window.addEventListener('load',() => {
let searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('id')) {
    let photographerId = searchParams.get('id')
} else {
    window.location.pathname = 'Front-End-Fisheye-main'
    
}
})
return false;