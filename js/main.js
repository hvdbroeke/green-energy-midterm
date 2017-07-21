/*global alert, console, document, window*/


(function () {

    "use strict";

    var masthead, slides, buttons, contents, container, i, k, key, imagesList, images, j;
    imagesList = [
        "./img/windmill.jpg",
        "./img/windmill-clouds.jpg",
        "./img/windmill-field.jpg"
    ];

    images = [];

    function preload(arr) {
        for (j = 0; j < arr.length; j += 1) {
            images[j] = new Image();
            images[j].src = arr[j];
        }
    }

    preload(imagesList);

    // images ready to be used;
    console.log(images[0].src + "\n" + images[1].src + "\n" + images[2].src);

    masthead = document.querySelector(".mh-image");

    slides = [
        "<figure><img src=\"./img/windmill-clouds.jpg\" alt =\"windmill\"><figcaption><h2>Easy and fast installation service.</h2></figcaption></figure>", "<figure><img src=\"./img/windmill-purple.jpg\" alt =\"windmill\"><figcaption><h2>Windmills for your farm or business.</h2></figcaption></figure>", "<figure><img src=\"./img/windmill-trees.jpg\" alt =\"windmill\"><figcaption><h2>Windmills for the home.</h2></figcaption></figure>", "<figure><img src=\"./img/windmill-sunset.jpg\" alt =\"windmill\"><figcaption><h2>Wind energy everyone can afford.</h2></figcaption></figure>"
    ];

    function fadeOut() {
        masthead.style.opacity = 0;
    }

    i = 0;

    function runSlides() {
        masthead.style.opacity = 1;
        if (i > 3) {
            i = 0;
        }
        masthead.innerHTML = slides[i];
        i += 1;
        window.setTimeout(fadeOut, 5000);
    }
    runSlides();
    window.setInterval(runSlides, 6000);

    buttons = document.querySelectorAll(".btn");
    contents = [
        "<h2>Save on Energy Costs with Wind</h2><img src=\"./img/windmill-field.jpg\" alt =\"windmill\"><p class=\"clearfix\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper maximus enim a tincidunt. Pellentesque tempus ex et odio auctor molestie. Aliquam tempor risus nec mauris dictum volutpat. Ut ac venenatis mauris. Aenean et mi sit amet est viverra laoreet suscipit non quam. Nunc et turpis eu purus pharetra lobortis eu non nulla. Donec malesuada pulvinar mi, id venenatis nunc blandit ut. Nulla facilisi. Duis luctus enim eu libero fermentum, sit amet molestie nisi elementum. Pellentesque volutpat, quam non sodales malesuada, eros ante imperdiet metus, a placerat lorem nisl quis turpis. Vivamus quis enim sagittis, luctus massa sit amet, egestas odio.</p>",

        "<h2>Windmills for Your Home</h2><img src=\"./img/windmill-clouds.jpg\" alt =\"windmill\"><p class=\"clearfix\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper maximus enim a tincidunt. Pellentesque tempus ex et odio auctor molestie. Aliquam tempor risus nec mauris dictum volutpat. Ut ac venenatis mauris. Aenean et mi sit amet est viverra laoreet suscipit non quam. Nunc et turpis eu purus pharetra lobortis eu non nulla. Donec malesuada pulvinar mi, id venenatis nunc blandit ut. Nulla facilisi. Duis luctus enim eu libero fermentum, sit amet molestie nisi elementum. Pellentesque volutpat, quam non sodales malesuada, eros ante imperdiet metus, a placerat lorem nisl quis turpis. Vivamus quis enim sagittis, luctus massa sit amet, egestas odio.</p>",

        "<h2>Windmills for Your Business</h2><img src=\"./img/windmill.jpg\" alt =\"windmill\"><p class=\"clearfix\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper maximus enim a tincidunt. Pellentesque tempus ex et odio auctor molestie. Aliquam tempor risus nec mauris dictum volutpat. Ut ac venenatis mauris. Aenean et mi sit amet est viverra laoreet suscipit non quam. Nunc et turpis eu purus pharetra lobortis eu non nulla. Donec malesuada pulvinar mi, id venenatis nunc blandit ut. Nulla facilisi. Duis luctus enim eu libero fermentum, sit amet molestie nisi elementum. Pellentesque volutpat, quam non sodales malesuada, eros ante imperdiet metus, a placerat lorem nisl quis turpis. Vivamus quis enim sagittis, luctus massa sit amet, egestas odio.</p>"
    ];

    container = document.querySelector(".container");

    container.innerHTML = contents[0];

    function handleClick(ev) {
        ev.preventDefault();
        for (k = 0; k < buttons.length; k += 1) {
            if (buttons[k].hasAttribute("id", "active") === true) {
                buttons[k].removeAttribute("id");
            }
        }
        if (ev.target.className === "fa fa-plug btn") {
            container.innerHTML = contents[0];
        } else if (ev.target.className === "fa fa-home btn") {
            container.innerHTML = contents[1];
        } else {
            container.innerHTML = contents[2];
        }
        ev.target.setAttribute("id", "active");
        console.log(container);
    }
    for (k = 0; k < buttons.length; k += 1) {
        buttons[k].addEventListener("click", handleClick);
    }
}());