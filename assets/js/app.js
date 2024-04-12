// make cross in navbar hamburger-------------

let body = document.body;
let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menuBar");
let line_1 = document.querySelector(".first-line")
let line_2 = document.querySelector(".sec-line");
let line_3 = document.querySelector(".third-line");

function cross() {
    line_2.classList.add("d-none");
    // line_1.classList.add("transform-origin-center-center");
    line_1.classList.add("position-relative");
    line_1.style.top = "12px";
    line_1.style.left = "2px";
    line_1.style.transform = "rotate(45deg)"
    line_3.classList.add("position-relative");
    line_3.style.top = "-12px";
    line_3.style.transform = "rotate(-45deg)";
    line_1.classList.add("transition")
    line_3.classList.add("transition")
}
function line() {
    line_2.classList.remove("d-none");
    line_1.classList.remove("position-relative");
    line_1.style.transform = "rotate(0deg)"
    line_3.classList.remove("position-relative");
    line_3.style.transform = "rotate(0deg)"
}


// add show class in nav links--------------
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menuList.classList.contains("show")) {
        cross();
        body.style.overflow = "hidden";
    } else {
        line();
        body.style.overflow = "auto";
    }
})

// first lick slider----------------
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 366,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// accordina--------------------------
let accordian = document.querySelectorAll(".accror_itm");
document.querySelector('.accrdian-img').style.transform = "rotate(180deg)";
document.querySelector('.hidden-text').style.display = "block";

accordian.forEach(Element => {
    let img = Element.querySelector(".accrdian-img");
    let clickable_accord = Element.querySelector(".accordian-head");
    let hidden_txt = Element.querySelector(".hidden-text");
    clickable_accord.addEventListener("click", () => {
        accordian.forEach(otherelement => {
            if (otherelement !== Element) {
                let img = otherelement.querySelector(".accrdian-img");
                let hidden_txt = otherelement.querySelector(".hidden-text");
                img.style.transform = "rotate(0deg)";
                hidden_txt.style.display = "none";
            }

        })
        let txt_style = window.getComputedStyle(hidden_txt).display;
        if (txt_style === "none") {
            hidden_txt.style.display = "block";
            img.style.transform = "rotate(180deg)";
        } else {
            hidden_txt.style.display = "none";
            img.style.transform = "rotate(0deg)";
        }
    })

})

// navlinks hidden show class----------

let navLinks = document.querySelectorAll(".nav_links")

navLinks.forEach(links => {
    links.addEventListener("click", () => {
        menuList.classList.remove("show");
        line();
        body.style.overflow = "auto";
    });
})


// slick slider 2------------

$('.slick_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// hidden img slider
$('.media_screen_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});