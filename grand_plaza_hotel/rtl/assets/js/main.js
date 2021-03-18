$(document).ready(function () {
    //  sidebar
    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.navbar-nav').toggleClass('active');
        $('.overlay').toggleClass('active');

    })

    $('.overlay').click(function () {
        $('.navbar-nav').toggleClass('active');
        $('.overlay').removeClass('active');
        $('#nav-icon4').removeClass('open');

    })

    $('.close-nav').click(function () {
        $('.navbar-nav').removeClass('active');
        $('.overlay').removeClass('active');
    })

    $('.nav-link').click(function () {
        $('.navbar-nav').removeClass('active');
        $('.overlay').removeClass('active');
        $('#nav-icon4').removeClass('open');

    })

    // vertical flip card

    $('.flip-card-btn').click(function () {
        $('.flipper').toggleClass('flip');
        $('.flip-text1').toggleClass('active');
        $('.flip-text2').toggleClass('active');

    });


    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



    // aos
    AOS.init({
        once: true
    });



    jQuery("#owl-one").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1.25
            }
        }
    });


    jQuery("#owl-two").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2.25
            }
        }
    });

    // Custom Button
    // $(".customNextBtn").click(function () {
    //     owl.trigger("next.owl.carousel");
    // });
    // $(".customPreviousBtn").click(function () {
    //     owl.trigger("prev.owl.carousel");
    // });

    
    
    var sel = document.getElementById('city-select');
    sel.onchange = function () {
        document.getElementById("btn__citySelect").href = this.value;
    }

    var selFooter = document.getElementById('city-select-footer');
    selFooter.onchange = function () {
        document.getElementById("btn__citySelect-footer").href = this.value;
    }


});




