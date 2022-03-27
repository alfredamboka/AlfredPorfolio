document.addEventListener(
  "DOMContentLoaded",
  function () {
    new SweetScroll({});
    particlesJS("particles-js", {
      particles: {
        number: { value: 30, density: { enable: !0, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "polygon",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: !1,
          anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
        },
        size: {
          value: 3,
          random: !0,
          anim: {
            enable: !1,
            speed: 19.18081918081918,
            size_min: 0.1,
            sync: !1,
          },
        },
        line_linked: {
          enable: !0,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 4,
          direction: "none",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 600, rotateY: 1200 },
        },
        nb: 80,
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !1, mode: "grab" },
          onclick: { enable: !0, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
    });
  },
  !1
);

window.innerWidth < 768 &&
  [].slice
    .call(document.querySelectorAll("[data-bss-disabled-mobile]"))
    .forEach(function (e) {
      e.classList.remove("animated"),
        e.removeAttribute("data-bss-hover-animate"),
        e.removeAttribute("data-aos");
    }),
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      [].slice
        .call(document.querySelectorAll("[data-bss-hover-animate]"))
        .forEach(function (e) {
          e.addEventListener("mouseenter", function (e) {
            e.target.classList.add(
              "animated",
              e.target.dataset.bssHoverAnimate
            );
          }),
            e.addEventListener("mouseleave", function (e) {
              e.target.classList.remove(
                "animated",
                e.target.dataset.bssHoverAnimate
              );
            });
        }),
        [].slice
          .call(document.querySelectorAll("[data-bss-tooltip]"))
          .map(function (e) {
            return new bootstrap.Tooltip(e);
          });
    },
    !1
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



  function sendEmail() {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "alfredamboka.wegner@gmail.com",
      Password : "3B3633837A6CD288DF7C97A8D7466DCBA7AB"
      To : 'alfredamboxan.wegner@gmail.com',
      From : document.getElementById("email").value,
      Subject : "Contact form Inquiry: Send From portfolio",
      Body : "Name:" + document.getElementById("name").value 
      + "<br> Email:" + document.getElementById("email").value 
      +  "<br> Message:" + document.getElementById("message").value
     }).then(
       message => alert("Thank You. Message send successfully."));}
=======
>>>>>>> parent of 5ad626d (# contact form updated)
=======
>>>>>>> parent of 5ad626d (# contact form updated)
=======
>>>>>>> parent of 5ad626d (# contact form updated)
