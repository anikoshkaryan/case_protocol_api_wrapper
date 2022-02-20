//*hamburger-menu part



document.querySelector('.hamburger-menu').addEventListener('click', function (event) {

  event.stopPropagation();

  // document.querySelector('.mobile_version').classList.toggle('open');

  // document.querySelector('.hamburger-menu').classList.toggle('open');

  $('.mobile_version').fadeToggle()
  
  

});

document.querySelector(".mobile_close").addEventListener("click", function (event) {

  event.stopPropagation();

  $('.mobile_version').fadeToggle()


});

