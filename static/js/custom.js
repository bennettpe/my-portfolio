// Materialize - Initializers
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
      // Initialize collapse button
      $(".button-collapse").sideNav({
          menuWidth: 200,    // Default is 240
          edge: 'left',      // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks
        }
    );
  });
