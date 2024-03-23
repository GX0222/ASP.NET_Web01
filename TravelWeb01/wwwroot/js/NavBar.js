// nabar 移動超過55vw變色
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('mynavbarCon');
    if (window.scrollY > 35 * window.innerWidth / 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('mynavbar');
    if (window.scrollY > 35 * window.innerWidth / 100) {
        navbar.classList.add('scrolledV2');
    } else {
        navbar.classList.remove('scrolledV2');
    }
});