let carouselPos = 1

async function rotateCarousel() {
  let carousel = document.getElementById('carousel')

  carousel.style.backgroundImage = `url('${`images/carousel/slide${carouselPos}.webp`}')`

  carouselPos++
  if (carouselPos > 5) {
    carouselPos = 1
  }
}

async function loaded() {
  window.setInterval(rotateCarousel, 4000)
  rotateCarousel()
}
