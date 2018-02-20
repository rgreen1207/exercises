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

    var img_holder_0 = document.getElementById("img_0");
    var img_holder_1 = document.getElementById("img_1");
    var center_img = document.getElementById("center_img");
    var img_holder_3 = document.getElementById("img_3");
    var img_holder_4 = document.getElementById("img_4");
    var img_array = [img_holder_0, img_holder_1, center_img, img_holder_3, img_holder_4];
    var main_img = document.getElementById("main_image");
    var strtstpbtn = document.getElementById("play_pause_btn");
    var counter = 0;

    var slideTimer = setInterval(function () {
        if (counter > images.slider_images.length - 1) {
            counter = 0;
        }
        slide_images(counter);
        counter++;
    }, 5000);

    function load_images() {
        count = 0
        img_array.forEach(function (item) {
            item.src = images.slider_images[count].img;
            count++;
        });
        main_img.style.backgroundImage = "url(" + center_img.src + ")";
        slideTimer
    };
    load_images();

    function slide_images(img_pos) {
        img_array.forEach(function (item) {
            img_pos = check_array_index(img_pos)
            item.src = images.slider_images[img_pos].img;
            img_pos++;
        });
        main_img.style.backgroundImage = "url(" + center_img.src + ")";
    };

    img_holder_0.addEventListener("click", function () {
        slide_images(counter = counter - 2);
        counter = check_array_index(counter);
    });

    img_holder_1.addEventListener("click", function () {
        slide_images(counter--);
        counter = check_array_index(counter);
    });

    img_holder_3.addEventListener("click", function () {
        slide_images(counter++);
        counter = check_array_index(counter);
    });

    img_holder_4.addEventListener("click", function () {
        slide_images(counter = counter + 2);
        counter = check_array_index(counter);
    });

    function check_array_index(index) {
        if ((index == images.slider_images.length) || (index < 0)) {
            index = index % images.slider_images.length;
        }
        return index;
    };

    var play = true;

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
            slideTimer = setInterval(function () {
                if (counter > images.slider_images.length - 1) {
                    counter = 0;
                }
                slide_images(counter);
                counter++;
            }, 5000);
        }
    });
})();
