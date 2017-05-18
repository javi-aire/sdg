/*
* Strictly for the accordion on mobile
* For the sake of time, there is a bug
* where the accordion and window/desktop
* tabs work at the same time

* To see both sides of the test
* (if i'm not already out of the running for the position)
* please uncomment lines 21-30
*
*/
( ($, document, undefined, window) => {
  let close = () => {
    $('.tab .tab_label').removeClass('active');
    $('.tab .tab_content').slideUp(300).removeClass('open');
    $('.tab_accordion').html('+');
  };

  $('.tab').click(function(e) {
    console.log('currentTarget:', e.currentTarget);
    // Grab current rel value
    // let currentTab = $(e.currentTarget).attr('rel');
    // if($(e.currentTarget).is('.active')) {
    //   close();
    // }else {
    //   close();
    //   // Add active class to current target label
    //   $(e.currentTarget.className + ' > .tab_label').addClass('active');
    //   // Open up the hidden content panel
    //   $('.tab_content[rel='+currentTab+"]").slideDown(150).addClass('open');
    // }

      e.preventDefault();
  });
})($, document, undefined, window);