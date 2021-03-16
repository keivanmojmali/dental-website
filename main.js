const $topDiv = document.querySelector('#topDiv');
const $topDivLeft = document.querySelector('#topDivLeft');
const $topDivRight = document.querySelector('#topDivRight');
const $pictureCarousel = document.querySelector('#pictureCarousel');
const $galleryControls = document.querySelector('#galleryControls');
const $clientReviews = document.querySelector('#clientReviews');
const $moreReviews = document.querySelector('#moreReviews');

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
 switch(event.target.id) {
   case 'right':
     $pictureCarousel.scrollLeft += 300;
     break;
     case 'left':
     $pictureCarousel.scrollLeft -= 300;
     break;
 }
})


$moreReviews.addEventListener('click',(e)=>{
  console.log($clientReviews.scrollTop)
  $clientReviews.scrollTop += 300;
})
