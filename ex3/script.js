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
            "img": "./images/highway.jpg",
            "title": "Christian Highway"
        },
        {
            "img": "./images/paramount_ranch.jpg",
            "title": "SoCal Mk7 at Paramount Ranch"
        },
        {
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
            "img": "./images/cb_night.jpg",
            "title": "Christian Night Shot"
        },
        {
            "img": "./images/bp_interior.jpg",
            "title": "Brandon Driver View"
        }]
    };

    var img_array = document.getElementsByClassName("img_preview");
    var main_img = document.getElementById("main_image");
    var strtstpbtn = document.getElementById("play_pause_btn");
    var counter = 0;
    var play = true;
    var img_holders = Array.from(document.getElementsByClassName("side_img"));

    var slideTimer = setInterval(slideTimerFunction, 5000);

    function slideTimerFunction() {
        if (counter > images.slider_images.length - 1) {
            counter = 0;
        }
        slide_images(counter);
        counter++;
    }

    function load_images() {
        count = 0
        for (var i = 0; i < img_array.length; i++) {
            count = place_images(i, count);
        }
        main_img.style.backgroundImage = "url(" + img_array[2].src + ")";
        slideTimer;
    };
    load_images();

    function slide_images(img_pos) {
        for (var i = 0; i < img_array.length; i++) {
            img_pos = check_array_index(img_pos)
            img_pos = place_images(i, img_pos);
        }
        main_img.style.backgroundImage = "url(" + img_array[2].src + ")";
    };

    function place_images(index, img_index) {
        img_array[index].src = images.slider_images[img_index].img;
        img_index++;
        return img_index;
    };

    function check_array_index(index) {
        if ((index >= images.slider_images.length) || (index < 0)) {
            index = index % images.slider_images.length;
        }
        return index;
    };

    strtstpbtn.addEventListener("click", function () {
        console.log(play);
        if(play == true){
            clearInterval(slideTimer);
            play = false;
        }
        else {
            play = true;
            slide_images(counter++);
            counter = check_array_index(counter);
            slideTimer = setInterval(slideTimerFunction, 5000);
        }
    });

    img_holders.forEach(function (element) {
        element.addEventListener("click", function () {
            clearInterval(slideTimer);
            var elm_ind = img_holders.indexOf(element);
            if (elm_ind == 0 || elm_ind == 1) {
                slide_images(counter = counter + (elm_ind - 2));
            }
            else {
                slide_images(counter = counter + (elm_ind - 1));
            }
            counter = check_array_index(counter);
            slideTimer = setInterval(slideTimerFunction, 5000);
        });
    });
})();