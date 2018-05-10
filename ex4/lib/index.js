(function () {

  var s = {
    menu: document.getElementById("drop_menu"),
    imgArray: document.getElementsByClassName("img_preview"),
    mainImg: document.getElementById("main_image"),
    startStopBtn: document.getElementById("play_pause_btn"),
    imgHolders: Array.from(document.getElementsByClassName("side_img")),
    dropArrow: document.getElementById('drop-arrow'),
    showClassName: 'show'
  };

  s.dropArrow.addEventListener('click', function (e) {
    s.menu.classList.toggle(s.showClassName);
  });

  window.onclick = function (event) {
    if (!event.target.matches('.menu_drop_button_holder') && !event.target.matches('.menu_drop_button')) {
      s.menu.classList.remove(s.showClassName);
    }
  };

  var images = {
    "sliderImages": [{
      "img": "./images/highway.jpg",
      "title": "Christian Highway"
    }, {
      "img": "./images/paramount_ranch.jpg",
      "title": "SoCal Mk7 at Paramount Ranch"
    }, {
      "img": "./images/gti_frontend.jpg",
      "title": "GTI Frontend"
    }, {
      "img": "./images/roccos.jpg",
      "title": "Roccos Rollout"
    }, {
      "img": "./images/bp_ach.jpg",
      "title": "Brandon GTI on ACH"
    }, {
      "img": "./images/cb_night.jpg",
      "title": "Christian Night Shot"
    }, {
      "img": "./images/bp_interior.jpg",
      "title": "Brandon Driver View"
    }]
  };

  var counter = 0;
  var play = true;
  var slideTimer = setInterval(slideTimerFunction, 5000);

  function slideTimerFunction() {
    if (counter > images.sliderImages.length - 1) {
      counter = 0;
    }
    slide_images(counter);
    counter++;
  }

  function load_images() {
    count = 0;
    for (var i = 0; i < s.imgArray.length; i++) {
      count = place_images(i, count);
    }
    s.mainImg.style.backgroundImage = "url(" + s.imgArray[2].src + ")";
    slideTimer;
  };
  load_images();

  function slide_images(imgPosition) {
    for (var i = 0; i < s.imgArray.length; i++) {
      imgPosition = check_array_index(imgPosition);
      imgPosition = place_images(i, imgPosition);
    }
    s.mainImg.style.backgroundImage = "url(" + s.imgArray[2].src + ")";
  };

  function place_images(index, imgIndex) {
    s.imgArray[index].src = images.sliderImages[imgIndex].img;
    imgIndex++;
    return imgIndex;
  };

  function check_array_index(index) {
    if (index >= images.sliderImages.length) {
      index = index % images.sliderImages.length;
    } else if (index < 0) {
      index = images.sliderImages.length - Math.abs(index);
    }
    return index;
  };

  s.startStopBtn.addEventListener("click", function () {
    console.log(play);
    if (play == true) {
      clearInterval(slideTimer);
      play = false;
    } else {
      play = true;
      slide_images(counter++);
      counter = check_array_index(counter);
      slideTimer = setInterval(slideTimerFunction, 5000);
    }
  });

  s.imgHolders.forEach(function (element) {
    element.addEventListener("click", function () {
      clearInterval(slideTimer);
      var elementIndex = s.imgHolders.indexOf(element);
      if (elementIndex == 0 || elementIndex == 1) {
        slide_images(counter = counter + (elementIndex - 2));
      } else {
        slide_images(counter = counter + (elementIndex - 1));
      }
      counter = check_array_index(counter);
      slideTimer = setInterval(slideTimerFunction, 5000);
    });
  });
})();