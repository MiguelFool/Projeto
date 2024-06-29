var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.querySelector(".navbar").style.top = "0";
                document.querySelector(".navbar").style.transition = "top 0.5s";
            } else {
                document.querySelector(".navbar").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        }
function toggleMenu() {
     var burger = document.getElementById('burger-icon');
     var svg = document.getElementById('menu-svg');
     var navcol = document.getElementById('navcol');
    if (burger.classList.contains('menu')) {
        burger.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'burger-menu.svg#burger-right');
        burger.classList.remove('menu');
        burger.classList.add('right');
        svg.classList.add('right');
        navcol.classList.remove('hidden');
    } else {
        burger.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'burger-menu.svg#burger-menu');
        burger.classList.remove('right');
        svg.classList.remove('right');
        burger.classList.add('menu');
        navcol.classList.add('hidden');
    }
}