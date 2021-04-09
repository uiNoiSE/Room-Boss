import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", function () {
  // check. If mobile(false) - parallax will work
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    function parallax(event) {
      setTimeout(() => {
        this.querySelectorAll(".js-layer").forEach((layer) => {
          let speed = layer.getAttribute("data-speed");
          layer.style.transform = `translate(${(event.clientX * speed) / 500
            }px, ${(event.clientY * speed) / 500}px)`;
        });
      }, 100);
    }
    document.addEventListener("mousemove", parallax);
  }


  // burger logics
  let body = document.querySelector('body');
  let aside = document.querySelector('aside');
  let hamburger = document.querySelector(".hamburger");
  let forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

  hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    if (!aside.classList.contains('_active')) {
      aside.classList.toggle('_active');
      body.classList.add('_burger-active');
    } else {
      body.classList.remove('_burger-active');
      aside.classList.toggle('_active');
    }
  }, false);

  let headerLogo = document.querySelector('header > .container > .logo');
  headerLogo.addEventListener('click', function () {
    aside.classList.remove('_active');
    hamburger.classList.remove('is-active');
  })


  // phone number formater
  let phone = document.querySelectorAll(".js-phone");
  for (let item of phone) {
    Inputmask("+7 999 999 99 99", { placeholder: ' ' }).mask(item);
  }


  // card togglers
  let card = document.querySelectorAll('.cards__toggle');
  forEach(card, function (card) {
    card.addEventListener('click', function () {
      this.classList.toggle('cards__toggle--active');
    })
  })

  let button = document.querySelectorAll('.button');

});
