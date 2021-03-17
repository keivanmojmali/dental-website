const $topDiv = document.querySelector('#topDiv');
const $topDivLeft = document.querySelector('#topDivLeft');
const $topDivRight = document.querySelector('#topDivRight');
const $pictureCarousel = document.querySelector('#pictureCarousel');
const $galleryControls = document.querySelector('#galleryControls');
const $clientReviews = document.querySelector('#clientReviews');
const $moreReviews = document.querySelector('#moreReviews');
const $backToTopReviews = document.querySelector('#backToTopReviews')
const $learnMore = document.querySelector('#learnMore');
const $drInfoButton = document.querySelector('#drInfoButton');
const $drDiv = document.querySelector('#drDiv')
const $behnazDiv = document.querySelector('#behnazDiv')



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



// $galleryControls.addEventListener('click',(e)=>{
//  switch(event.target.id) {
//    case 'right':
//      $pictureCarousel.scrollLeft += 300;
//      break;
//      case 'left':
//      $pictureCarousel.scrollLeft -= 300;
//      break;
//  }
// })


$moreReviews.addEventListener('click',(e)=>{
  console.log($clientReviews.scrollTop)
  $clientReviews.scrollTop += 360;
  $backToTopReviews.classList.remove('d-none')
})

$backToTopReviews.addEventListener('click',(e)=>{
  backToTopReviews.classList.add('d-none');
    $clientReviews.scrollTop =0 ;
})

$learnMore.addEventListener('click',(e)=>{

  switch(event.target.id){
    case 'behnaz':
    $behnazDiv.classList.remove('display-none');
    $drDiv.classList.add('display-none');
    $drInfoButton.classList.remove('display-none');
      break;
      case 'dr':
  $behnazDiv.classList.add('display-none');
  $drDiv.classList.remove('display-none');
  $drInfoButton.classList.remove('display-none');
        break;
  }

})


$drInfoButton.addEventListener('click',(e)=>{
  $drDiv.classList.add('display-none');
  $behnazDiv.classList.add('display-none');
  $drInfoButton.classList.add('display-none');
})



$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    dots: false,
    centerMode: true,
    centerPadding: '60px',

  })
})
