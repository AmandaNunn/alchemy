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

document.addEventListener("DOMContentLoaded", function(){
    mobileNav.mainNav();
  });
