(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready

  $('.slider-for').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         asNavFor: '.slider-for',
         dots: true,
         centerMode: true,
         focusOnSelect: true
    });
})(jQuery); // end jQuery



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
