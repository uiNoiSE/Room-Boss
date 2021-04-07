import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", function () {
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



  var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

  var hamburgers = document.querySelectorAll(".hamburger");

  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
        document.querySelector('aside').classList.toggle('_active');
        document.querySelector('body').classList.toggle('_burger-active');
      }, false);
    });
  }

  let logo = document.querySelector('header > .container > .logo');

  logo.addEventListener('click', function () {
    document.querySelector('aside').classList.remove('_active');
    document.querySelector(".hamburger").classList.remove('is-active');
  })

  let card = document.querySelectorAll('.cards__toggle');
  forEach(card, function (card) {
    card.addEventListener('click', function () {
      this.classList.toggle('cards__toggle--active');
    })
  })

  let phone = document.querySelectorAll(".js-phone");
  for (let item of phone) {
    Inputmask("+9 999 999 99 99", { placeholder: '' }).mask(item);
  }

});