$(document).ready(function () {
    // OwlCarousel - Services Carousel
    if ($("#servicesOwl").length && $.fn.owlCarousel) {
        var owl = $("#servicesOwl").owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            dots: false,
            center: true,
            stagePadding: 120,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-chevron-left"></i>',
                '<i class="fa fa-chevron-right"></i>'
            ],
            responsive: {
                0: { items: 1, stagePadding: 20 },
                600: { items: 1, stagePadding: 40 },
                900: { items: 2, stagePadding: 60 },
                1200: { items: 3, stagePadding: 120 }
            }
        });

        // Owl Progress Bar
        owl.on('initialized.owl.carousel changed.owl.carousel', function (event) {
            if (!event.namespace) return;
            var carousel = event.relatedTarget;
            var percent = ((carousel.relative(carousel.current()) + 1) / carousel.items().length) * 100;
            $('#carousel-progress-bar').css('width', percent + '%');
        });
    }

    // OwlCarousel - Blog Section
    if ($("#blogOwl").length && $.fn.owlCarousel) {
        $("#blogOwl").owlCarousel({
            loop: true,
            margin: 32,
            nav: true,
            dots: true,
            center: true,
            stagePadding: 80,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-chevron-left"></i>',
                '<i class="fa fa-chevron-right"></i>'
            ],
            responsive: {
                0: { items: 1, stagePadding: 20 },
                600: { items: 1, stagePadding: 40 },
                900: { items: 2, stagePadding: 60 },
                1200: { items: 3, stagePadding: 80 }
            }
        });
    }

    if ($("#blogOwlHome").length && $.fn.owlCarousel) {
        var blogOwl = $("#blogOwlHome").owlCarousel({
            loop: true,
            margin: 32,
            nav: true,
            dots: true,
            center: true,
            stagePadding: 80,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-chevron-left"></i>',
                '<i class="fa fa-chevron-right"></i>'
            ],
            responsive: {
                0: { items: 1, stagePadding: 20 },
                600: { items: 1, stagePadding: 40 },
                900: { items: 2, stagePadding: 60 },
                1200: { items: 3, stagePadding: 80 }
            }
        });

        blogOwl.on('initialized.owl.carousel changed.owl.carousel', function (event) {
            if (!event.namespace) return;
            var carousel = event.relatedTarget;
            var percent = ((carousel.relative(carousel.current()) + 1) / carousel.items().length) * 100;
            $('#blog-carousel-progress-bar').css('width', percent + '%');
        });
    }

    // Slick Carousel - Hero
    if ($('.hero-carousel').length && $.fn.slick) {
        $('.hero-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            dots: true,
            arrows: true,
            speed: 500,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        });
    }

    // Slick - Services
    if ($('#servicesOwl').length && $.fn.slick) {
        $('#servicesOwl').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            infinite: true,
            dots: true,
            arrows: true,
            centerMode: true,
            variableWidth: false,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2, centerMode: true } },
                { breakpoint: 900, settings: { slidesToShow: 1, centerMode: true } },
                { breakpoint: 600, settings: { slidesToShow: 1, centerMode: false } }
            ],
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            appendDots: $('#carousel-progress'),
            customPaging: function (slider, i) {
                return '<span class="slick-dot"></span>';
            }
        });

        $('#servicesOwl').on('afterChange', function (event, slick, currentSlide) {
            var percent = ((currentSlide + 1) / slick.slideCount) * 100;
            $('#carousel-progress-bar').css('width', percent + '%');
        });
    }

    // Slick - Blog
    if ($('#blogOwlHome').length && $.fn.slick) {
        $('#blogOwlHome').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            infinite: true,
            dots: true,
            arrows: true,
            centerMode: true,
            variableWidth: false,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 2, centerMode: true } },
                { breakpoint: 900, settings: { slidesToShow: 1, centerMode: true } },
                { breakpoint: 600, settings: { slidesToShow: 1, centerMode: false } }
            ],
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
            appendDots: $('#blog-carousel-progress'),
            customPaging: function (slider, i) {
                return '<span class="slick-dot"></span>';
            }
        });

        $('#blogOwlHome').on('afterChange', function (event, slick, currentSlide) {
            var percent = ((currentSlide + 1) / slick.slideCount) * 100;
            $('#blog-carousel-progress-bar').css('width', percent + '%');
        });
    }
});
