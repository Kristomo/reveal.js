

window.addEventListener( 'load', function () {

    var body = document.getElementsByTagName("body");
    var logo = document.getElementById("logo");
    var slide = document.getElementsByClassName("slides");
    var wordmark = document.getElementById("wordmark");
    var slideLeft = slide[0].getBoundingClientRect().left;
    var slideRight = slide[0].getBoundingClientRect().right;
    var wordmarkBottom = wordmark.offsetTop + wordmark.offsetHeight;

    logo.style.zoom = wordmark.style.zoom = slide[0].style.zoom;

    wordmark.style.left = slideLeft + "px";
    logo.style.left = slideRight - logo.offsetWidth + "px";
console.log(window.innerWidth);
    console.log(slideRight);
    console.log(logo.offsetWidth);

    window.addEventListener("resize", function(){
        slideLeft = slide[0].getBoundingClientRect().left;
        slideRight = slide[0].getBoundingClientRect().right;
        logo.style.zoom = wordmark.style.zoom = slide[0].style.zoom;
        wordmark.style.left = slideLeft + "px";
        logo.style.left = (slide[0].offsetLeft + slide[0].clientWidth) + "px";
        windowHeight = window.innerHeight;
    });


}, false );