AOS.init();

$(function () {
    // Función para cambiar el modo de color
    $('#modoColor').on('click', function () {
        if ($(this).is(':checked')) {
            // Div Flotantes
            $('.float').css({
                backgroundColor: '#fff',
                boxShadow: '0px 0px 10px #000',
            });
            // Header
            $('#header').css({
                backgroundColor: '#fff',
                color: '#000',
            });
            // Sidebar
            $('.sidebar').css({
                backgroundColor: '#fff',
                boxShadow: '0px 0px 10px #000',
            });
            // Links
            $('a').css({
                color: '#000',
            });
            // Labels
            $('label').css({
                color: '#000',
            });
            // Main
            $('#main').css({
                backgroundColor: '#fff',
            });
            // Párrafos
            $('p').css({
                color: '#000',
            });
            // Títulos
            $('h1, h2, h3, h4, h5, h6').css({
                color: '#000',
            });
            // Contenedor
            $('.contenedor').css({
                boxShadow: '0px 0px 10px #000',
            });
            //Footer
            $('#footer h2').css({
                color: '#fff',
            });
            $('#footer p').css({
                color: '#fff',
            });
            $('#footer a').css({
                color: '#fff',
            });
            $('#footer .contacto p').css({
                color: '#ff0',
            });
            // Hover
            $('a').on('mouseover', function () {
                this.style.color = '#555555';
            });
            $('a').on('mouseout', function () {
                this.style.color = '#000';
            });
            $('#footer a').on('mouseover', function () {
                this.style.color = '#555555';
            });
            $('#footer a').on('mouseout', function () {
                this.style.color = '#fff';
            });
        }
        else {
            $('.float').css({
                backgroundColor: '#000',
                boxShadow: '0px 0px 10px #fff',
            });
            $('#header').css({
                backgroundColor: '#000',
                color: '#fff',
            });
            $('.sidebar').css({
                backgroundColor: '#000',
                boxShadow: '0px 0px 10px #fff',
            });
            $('a').css({
                color: '#fff',
            });
            $('label').css({
                color: '#fff',
            });
            $('#main').css({
                backgroundColor: '#000',
                color: '#fff',
            });
            $('p').css({
                color: '#fff',
            });
            $('h1, h2, h3, h4, h5, h6').css({
                color: '#fff',
            });
            $('.contenedor').css({
                boxShadow: '0px 0px 10px #fff',
            });
            $('#footer h2').css({
                color: '#fff',
            });
            $('#footer p').css({
                color: 'fff',
            });
            $('#footer a').css({
                color: '#fff',
            });
            $('#footer .contacto p').css({
                color: '#ff0',
            });
            $('a').on('mouseover', function () {
                this.style.color = '#555555';
            });
            $('a').on('mouseout', function () {
                this.style.color = '#fff';
            });
            $('#footer a').on('mouseover', function () {
                this.style.color = '#555555';
            });
            $('#footer a').on('mouseout', function () {
                this.style.color = '#000';
            });
            $('#footer .contenedor a').on('mouseover', function () {
                this.style.color = 'blue';
            });
            $('#footer .contenedor a').on('mouseout', function () {
                this.style.color = '#fff';
            });
        }
    });
    // Función para expandir el sidebar
    $('#expand').on('click', function () {
        if ($(this).is(':checked')) {
            $('.sidebar').animate({
                width: '300px',
            });
        }
        else {
            $('.sidebar').animate({
                width: '100px',
            });
        }
    });
});
