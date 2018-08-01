var projectsCollapseButtonExpanded = false;

$(document).ready(function() {

  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

    // navigation click actions	
    $('.nav-link').on('click', function(event) {
      event.preventDefault();
      var sectionID = $(this).attr("data-id");
      scrollToID('#' + sectionID, 750);
    });
    // navigation brand click actions
    $('.nav-brand').on('click', function(event) {
      event.preventDefault();
      var sectionID = $(this).attr("data-id");
      scrollToID('#' + sectionID, 750);
    });
    $('#projectsCollapseButton').on('click', function(event) {
      event.preventDefault();
      projectsCollapseButtonExpanded = $(this).attr("aria-expanded");
      if (projectsCollapseButtonExpanded == "true") {
        $(this).text("View more");
      } else {
        $(this).text("View less");
      }
      
    });
    $('#copyright-year').text(currentYear);
  });

  // scroll function
  function scrollToID(id, speed) {
    var offSet = 60;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({
      scrollTop: targetOffset
    }, speed);
    if (mainNav.hasClass("open")) {
      mainNav.css("height", "1px").removeClass("in").addClass("collapse");
      mainNav.removeClass("open");
    }
  }
  
  if (typeof console === "undefined") {
    console = {
      log: function() {}
    };
  }