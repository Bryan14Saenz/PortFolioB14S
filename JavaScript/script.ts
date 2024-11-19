
$(function () {
  
  // Función para cambiar el modo de color

  // Función para expandir el sidebar
  $('#expand').on('click', function() {
    if ($(this).is(':checked')) {
      $('.sidebar').animate({
        width: '300px'
      })
    } else {
      $('.sidebar').animate({
        width: '100px'
      })
    }
  });

});