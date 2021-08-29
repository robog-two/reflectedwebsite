let carouselPos = 1

async function rotateCarousel() {
  let carousel = document.getElementById('carousel')

  carousel.style.backgroundImage = `url('${`images/carousel/slide${carouselPos}.png`}')`

  carouselPos++
  if (carouselPos > 5) {
    carouselPos = 1
  }
}

async function loaded() {
  for (el of document.getElementsByClassName("preload")) {
    el.style.display = 'none'
  }

  window.setInterval(rotateCarousel, 4000)
  rotateCarousel()
}
