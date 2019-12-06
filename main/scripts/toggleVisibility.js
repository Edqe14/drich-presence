function toggleVisibility(element) {
    let e = document.getElementById(element);
    if(!e) return console.error("invalid element");

    if(e.classList.contains('hidden')) e.classList.replace('hidden', 'visible')
    else e.classList.replace('visible', 'hidden')
}