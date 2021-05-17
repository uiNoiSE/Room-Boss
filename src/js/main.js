import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", function () {
  // burger logics
  let body = document.querySelector("body");
  let aside = document.querySelector("aside");
  let hamburger = document.querySelector(".hamburger");
  let forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
  };

  hamburger.addEventListener(
    "click",
    function () {
      this.classList.toggle("is-active");
      if (!aside.classList.contains("_active")) {
        aside.classList.toggle("_active");
        body.classList.add("_sideElemActive");
      } else {
        body.classList.remove("_sideElemActive");
        aside.classList.toggle("_active");
      }
    },
    false
  );

  // close menu on menu anchor link tap
  let asideAnchors = document.querySelectorAll("aside a");
  forEach(asideAnchors, (asideAnchors) => {
    asideAnchors.addEventListener("click", (e) => {
      aside.classList.remove("_active");
      body.classList.remove("_sideElemActive");
      hamburger.classList.remove("is-active");
    });
  });

  let headerLogo = document.querySelector("header .logo");
  headerLogo.addEventListener("click", function () {
    aside.classList.remove("_active");
    hamburger.classList.remove("is-active");
    body.classList.remove("_sideElemActive");
  });

  // phone number formater
  let phone = document.querySelectorAll(".js-phone");
  for (let item of phone) {
    Inputmask("+7 999 999 99 99", { placeholder: " " }).mask(item);
  }

  // for appear animations
  var anim = document.querySelectorAll(".js-anim");

  (function () {
    var elements;
    var windowHeight;

    function init() {
      windowHeight = window.innerHeight;
    }

    function checkPosition() {
      for (var i = 0; i < anim.length; i++) {
        var element = anim[i];
        var positionFromTop = anim[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= -120) {
          element.classList.add("animated");
        }
      }
    }

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);

    init();
    checkPosition();
  })();

  // popup
  let popupButton = document.querySelectorAll(".button");
  let popupForm = document.querySelector(".js-popup");

  forEach(popupButton, function (popupButton) {
    popupButton.addEventListener("click", function () {
      popupForm.classList.add("__active");
      body.classList.add("_sideElemActive");
    });
  });

  popupForm.addEventListener("click", function (e) {
    if (e.currentTarget === e.target) {
      popupForm.classList.remove("__active");
      if (!aside.classList.contains("_active")) {
        body.classList.remove("_sideElemActive");
      }
    }
  });

  // popup close on Escape press
  body.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (popupForm.classList.contains("__active")) {
        popupForm.classList.remove("__active");
        body.classList.remove("_sideElemActive");
      }
    }
  });

  let crop = document.querySelector(".floors__highlight");
  let floorsMarker = document.querySelectorAll(".floors__marker");
  let floorNum = document.querySelector(".floors__floor > span");
  let space = document.querySelector(".floors__space > span");
  let onSell = document.querySelector(".floors__on-sell > span");
  let variants = document.querySelector(".floors__variants-wrap");
  let floorsCross = document.querySelector(".floors__cross-wrap");
  let floorsRoomsAvailable = document.querySelector(".floors__rooms");

  let n = floorsMarker.length;
  marker(n);

  function marker(n) {
    if (n <= 0) {
      return;
    } else {
      floorsMarker[n - 1].addEventListener("mouseenter", () => {
        let cropClass = "floors__highlight";

        function floorSelect() {
          crop.className = `${
            cropClass + " " + cropClass + "--" + n + " __js-active"
          }`;
          variants.classList.add("__js-active");

          switch (n) {
            case 1:
              space.innerText = 150;
              onSell.innerText = 4;
              variants.style.cssText = "top: 20%";
              floorsRoomsAvailable.children[0].classList.remove("js-disabled");
              floorsRoomsAvailable.children[1].classList.remove("js-disabled");
              floorsRoomsAvailable.children[2].classList.add("js-disabled");
              return (floorNum.innerText = 4);

            case 2:
              space.innerText = 135;
              variants.style.cssText = "top: 30%";
              floorsRoomsAvailable.children[0].classList.add("js-disabled");
              floorsRoomsAvailable.children[1].classList.remove("js-disabled");
              floorsRoomsAvailable.children[2].classList.remove("js-disabled");
              return (floorNum.innerText = 3);

            case 3:
              space.innerText = 105;
              variants.style.cssText = "top: 40%";
              floorsRoomsAvailable.children[0].classList.remove("js-disabled");
              floorsRoomsAvailable.children[1].classList.add("js-disabled");
              floorsRoomsAvailable.children[2].classList.add("js-disabled");
              return (floorNum.innerText = 2);

            case 4:
              space.innerText = 90;
              variants.style.cssText = "top: 50%";
              floorsRoomsAvailable.children[0].classList.add("js-disabled");
              floorsRoomsAvailable.children[1].classList.remove("js-disabled");
              floorsRoomsAvailable.children[2].classList.add("js-disabled");
              return (floorNum.innerText = 1);
          }
        }

        floorSelect();
      });

      floorsCross.addEventListener("click", (e) => {
        if (variants.classList.contains("__js-active")) {
          variants.classList.remove("__js-active");
          crop.classList.remove("__js-active");
        }
      });

      variants.addEventListener("mouseout", () => {
        if (variants.classList.contains("__js-active")) {
          variants.classList.remove("__js-active");
          crop.classList.remove("__js-active");
        }
      });

      return marker(n - 1);
    }
  }

  // check. If mobile(false) - parallax will work
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    function parallax(event) {
      setTimeout(() => {
        this.querySelectorAll(".js-layer").forEach((layer) => {
          let speed = layer.getAttribute("data-speed");
          layer.style.transform = `translate(${
            (event.clientX * speed) / 500
          }px, ${(event.clientY * speed) / 500}px)`;
        });
      }, 100);
    }
    document.addEventListener("mousemove", parallax);
    floorsCross.remove();
  }
});
