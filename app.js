// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

// var slideIndex = 1;
// showDivs(slideIndex);

// var isPaused = false;

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     var y = document.getElementsByClassName("mySlidesText");
//     if (n > x.length) { slideIndex = 1 }
//     if (n > y.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = x.length };
//     if (n < 1) { slideIndex = y.length };
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//         y[i].style.display = "none";
//     }
//     x[slideIndex - 1].style.display = "block";
//     y[slideIndex - 1].style.display = "block";
// }

// setInterval(function() {
//     if (!isPaused) {
//         plusDivs(+1);
//     }
// }, 3500);

// function stopLoop() {
//     isPaused = true;
// }

// function startLoop() {
//     isPaused = false;
// }

$(".owl-carousel.owl-carousel10").owlCarousel({
    loop: true,
    center: true,
    margin: 25,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        760: {
            items: 4,
            nav: false
        }
    }
});