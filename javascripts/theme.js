(function($) {

  $(document).ready(function() {
    var update = $('#update')
    var close = $("<div>", {'class': "update-close"}).text('x');
    update.draggable();

    update.prepend(close);
    close.click(function() {
      update.hide();
    });

    // toggleFieldset();
    $('#update fieldset.tabular legend').click(function() {
      $(this).closest('fieldset').toggleClass('show-children');
    });

   // Don't display tooltip for Actions menu
   $( 'a[title="Actions"]' ).tooltip( 'disable' );
   $( '.drdn-items a' ).tooltip( 'disable' );
  });

})(jQuery);
