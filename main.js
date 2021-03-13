const $topDiv = document.querySelector('#topDiv');
const $topDivLeft = document.querySelector('#topDivLeft');
const $topDivRight = document.querySelector('#topDivRight');


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
