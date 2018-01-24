(function () {

  var s = {
    menu: document.getElementById("drop_menu"),
    showClassName: 'show'
  };


  var menu = document.getElementById("drop_menu");
  document.getElementById('drop-arrow').addEventListener('click', function (e) {
    menu.classList.toggle(s.showClassName);
  });

  window.onclick = function (event) {
    if (!event.target.matches('.menu_drop_button_holder') && !event.target.matches('.menu_drop_button')) {
      menu.classList.remove(s.showClassName);
    }
  }

  var images = {
      "slider_images": [{
          "img": "./images/gti_frontend.jpg",
          "title": "GTI Frontend"
      },
      {
          "img": "./images/roccos.jpg",
          "title": "Roccos Rollout"
      },
      {
          "img": "./images/bp_ach.jpg",
          "title": "Brandon GTI on ACH"
      },
      {
          "img": "./images/bp_interior.jpg",
          "title": "Brandon Driver View"
      },
      {
          "img": "./images/cb_night.jpg",
          "title": "Christian Night Shot"
      },
      {
          "img": "./images/highway.jpg",
          "title": "Christian Highway"
      },
      {
          "img": "./images/paramount_ranch.jpg",
          "title": "SoCal Mk7 at Paramount Ranch"
      }]
  };

  function rotate_images() {
      main_img = document.getElementById("main_image");
      
  };

})();