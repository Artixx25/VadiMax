const body = document.body
body.classList.add("no-scroll")
const loader = document.querySelector(".loader")
document.addEventListener("DOMContentLoaded", () => {
  loader.classList.add("hide-load")
  body.classList.remove("no-scroll")
})

const menu = document.getElementById("menu")
const header = document.querySelector("header")
const sections = document.querySelectorAll(".container_inf")
const menuListItem = document.querySelectorAll(".menu-list a")
// menu
window.addEventListener("scroll", () => onScroll())
document.querySelector(".plate1").addEventListener("click", () => {
    menu.classList.toggle("open")
    document.querySelector(".plate1").classList.toggle('active')
    body.classList.toggle("no-scroll")
})

menuListItem.forEach(item => item.addEventListener("click", () => {
  menu.classList.remove("open")
  document.querySelector(".plate1").classList.remove('active')
  body.classList.remove("no-scroll")
}))

  function onScroll(){
    menu.classList.toggle("scrolled-1", window.scrollY > 100)
    const scrollPos = $(document).scrollTop();
    $('.menu-list a').each(function() {
        const currLink = $(this);
        const refElement = $(currLink.attr("href"));
        if (refElement.position().top - 60 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu-list a').removeClass("active");
            currLink.addClass("active");
        }
        else currLink.removeClass("active");
        });
    }

// slider
  $(document).ready(function() {
      $('.card-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ],
        prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><span class="slick-prev-icon" aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><span class="slick-next-icon" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span></button>'
      });
  });
  
// reviews
const progressDone = document.querySelectorAll('.progress-done');
progressDone.forEach(progress => progress.style.width = progress.getAttribute('data-done') + '%');

// map
let mapOptions = {
  center: [49.10290354274863, 33.41625477175489],
  zoom: 13
}
let map = new L.map('map' , mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
let marker = new L.Marker([49.10290354274863, 33.41625477175489]);
marker.addTo(map);