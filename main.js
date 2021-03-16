const $topDiv = document.querySelector('#topDiv');
const $topDivLeft = document.querySelector('#topDivLeft');
const $topDivRight = document.querySelector('#topDivRight');
const $pictureCarousel = document.querySelector('#pictureCarousel');
const picIndex = 0;
const $galleryControls = document.querySelector('#galleryControls')
const pictureArray = [
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
  './images/pic.png',
]

window.addEventListener('scroll',()=>{
  if(window.scrollY !== 0) {
    $topDiv.classList.remove('larger-height')
    $topDiv.classList.add('p-2')
    $topDivRight.classList.add('invisible')
    $topDivLeft.classList.add('invisible')
  } else {
    $topDiv.classList.add('larger-height')
    $topDivRight.classList.remove('invisible')
    $topDivLeft.classList.remove('invisible')
  }
})




$galleryControls.addEventListener('click',(e)=>{
  console.log(event.target.id, $pictureCarousel.scrollLeft )
 switch(event.target.id) {
   case 'right':
     $pictureCarousel.scrollLeft += 300;
     break;
     case 'left':
     $pictureCarousel.scrollLeft -= 300;
     break;
 }
})
