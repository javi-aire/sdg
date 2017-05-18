( ($, document, undefined, jQuery) => {
  function close_accordion_section() {
      // $('.tab .tab_label').removeClass('active');
      $('.tab .tab_content').slideUp(300).prop('checked', false);
  }

  $('.tb').click(function(e) {
      console.log('clicked:', e.currentTarget);
      // Grab current anchor value
      let currentTabContent = $(e.currentTarget).children(".tab_content")[0];
      console.log('currentTabContent:', currentTabContent);

      $(currentTabContent).css("position", "initial");
      $(currentTabContent).slideDown(150);


      // if($(e.currentTarget).prop('checked', true)) {
      //   // Open up the hidden content panel
      //   console.log(e.currentTarget, 'is checked');
      //   $(e.currentTarget).slideDown(300);

      // }else {

      //   console.log('closing accordion section');
      //   close_accordion_section();

      // }

      e.preventDefault();
  });
})($, document, undefined, jQuery);