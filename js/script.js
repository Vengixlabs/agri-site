$(function () {
    onscroll = () => {

        const navBar = document.getElementById('m-nav');
        const navDiv = document.getElementById('nav-div');
        const offset = navDiv.offsetTop;

        if (window.pageYOffset < offset) {
            navBar.classList.remove('bg-dark');
            navBar.classList.add('bg-transparent');
        } else {
            navBar.classList.add('bg-dark');
            navBar.classList.remove('bg-transparent');
        }
    }
});
