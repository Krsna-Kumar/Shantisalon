window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector('.loader').classList.add('hidden');
    }, 1000); // Loader stays for at least 1 second before fading out
});

function toggleMenu() {
    const navbar = document.querySelector('.navigation-bar');
    const navLinks = document.querySelector('.navi-links');
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        document.body.appendChild(navLinks);

    } else {
    }

}