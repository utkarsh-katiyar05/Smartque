$(document).ready(function() {
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

  // Keyboard navigation
  $(document).on('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      owl.trigger('prev.owl.carousel');
    }
    if (e.key === "ArrowRight") {
      owl.trigger('next.owl.carousel');
    }
  });

  // Auto-pause on hover
  $('#servicesOwl').on('mouseenter', function() {
    $(this).trigger('stop.owl.autoplay');
  }).on('mouseleave', function() {
    $(this).trigger('play.owl.autoplay');
  });
  
  // Progress bar on carousel change
  owl.on('initialized.owl.carousel changed.owl.carousel', function(event) {
    if (!event.namespace) return;
    var carousel = event.relatedTarget;
    var percent = ((carousel.relative(carousel.current()) + 1) / carousel.items().length) * 100;
    $('#carousel-progress-bar').css('width', percent + '%');
  });
});


document.querySelectorAll('.service-card-modern').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;
    card.style.transform = `rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg) scale(1.04)`;
  });
  card.addEventListener('mouseleave', function() {
    card.style.transform = '';
  });
});
