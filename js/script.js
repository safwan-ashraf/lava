let ham = document.querySelector("#menu-icon");
let nav = document.querySelector("#mobile-menu");
let clos = document.querySelector("#close-icon");
let overlay = document.querySelector(".overlay")


ham.addEventListener("click", function(){
    nav.classList.toggle("active");
    ham.classList.toggle("active");
    clos.classList.toggle("active");
    overlay.classList.toggle("active")
})

clos.addEventListener("click", function(){
    clos.classList.toggle("active");
    nav.classList.toggle("active");
    ham.classList.toggle("active");
    overlay.classList.toggle("active")
})

overlay.addEventListener("click", function(){
    nav.classList.toggle("active");
    clos.classList.toggle("active");
    overlay.classList.toggle("active");
    ham.classList.toggle("active");
})

// $('#main div.bottom div.container div.left').slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1
//   });

$('#main div.bottom div.container div.left').slick({
    autoplay:true,
    autoplaySpeed: 2000,
    // centerMode:true,
    dots: true,
    
    // customPaging : function(slider, i) {
    //     return '<a href="#"><img src="slide-dot.png" /><img src="slide-dot-active.png" /></a>';
    // },
    prevArrow: $('#main div.bottom div.container div.right div.arrow.a-left'),
    nextArrow: $('#main div.bottom div.container div.right div.arrow.a-right'),
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 593,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}