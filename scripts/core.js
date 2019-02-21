// MASTER JAVASCRIPT FILE

"use strict;"

var mobileNav = {
  mainNav: function(){

    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function(){
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });
  }
}

function findYOffset(){
  var position = window.pageYOffset;
  if(position >= 40){
    hideNavBar();
  } else {
    showNavBar();
  }
}

function showNavBar(){
  var nav = document.getElementById('nav');
  nav.classList.remove('is-hidden');
}
function hideNavBar(){
  var nav = document.getElementById('nav');
  nav.classList.add('is-hidden');
}

window.addEventListener('scroll', function(){
  findYOffset();
});

document.addEventListener("DOMContentLoaded", function(){
  mobileNav.mainNav();
});
