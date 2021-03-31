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
});
